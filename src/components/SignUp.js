import { React, useEffect, useState } from "react";
import Options from "./Options";
import {
  provinces,
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
  createUser,
  getUserInformation,
} from "../helpers/signUpHelpers";

export default function SignUp({ setCookie, setCurrentUser }) {
  //States for sign-up inputs
  const [userInformation, setUserInformation] = useState();
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validPasswordConfirmation, setValidPasswordConfirmation] =
    useState(true);

  //Create Options for Province
  const provinceList = provinces.map((province, index) => {
    return <Options key={index} option={province} />;
  });

  //Helper Functions
  const submitInformation = async (e) => {
    e.preventDefault();

    //Reset states
    setValidEmail(true);
    setValidPassword(true);
    setValidPasswordConfirmation(true);

    const information = {
      email: e.target[0].value,
      password: e.target[1].value,
      validPasswordConfirmation: e.target[2].value,
      name: e.target[3].value,
      surname: e.target[4].value,
      phoneNumber: e.target[5].value,
      address: e.target[6].value,
      city: e.target[7].value,
      province: e.target[8].value,
      postalCode: e.target[9].value,
    };

    setUserInformation(information);

    if (!validatePassword(information.password)) {
      setValidPassword(false);
    }

    if (
      !validatePasswordConfirmation(
        information.password,
        information.validPasswordConfirmation
      )
    ) {
      setValidPasswordConfirmation(false);
    }

    const verifyEmail = await validateEmail(information.email);

    if (!verifyEmail) {
      setValidEmail(false);
    }
  };

  useEffect(() => {
    const callCreateUser = async (userInformation) =>
      await createUser(userInformation);
    const callGetUserInformation = async (email) =>
      await getUserInformation(email);

    if (
      validEmail &&
      validPassword &&
      validPasswordConfirmation &&
      userInformation
    ) {
      callCreateUser(userInformation)
        .then(() => {
          callGetUserInformation(userInformation.email).then((response) => {
            const userID = response.data.id;
            setCookie("ID", userID, { path: "/" });
            setCurrentUser(userID);
          });
        })
        .catch((err) => console.log(err.message));
    }
  }, [validEmail, validPassword, validPasswordConfirmation, userInformation]);

  return (
    <>
      <form
        onSubmit={submitInformation}
        className="row g-3 needs-validation"
        id="signup"
        novalidate
      >
        <div className="col-md-4">
          <label htmlFor="signup-email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className={`form-control ${validEmail ? null : "is-invalid"}`}
            id="signup-email"
          />
          <div className="invalid-feedback">
            Email already exists or cannot be used.
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="signup-password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${validPassword ? null : "is-invalid"}`}
            id="signup-password"
          />
          <div className="invalid-feedback">
            Password must:
            <ul>
              <li>Be at least 8 characters long</li>
              <li>Include upper and lower cases</li>
              <li>Have letters and numbers</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="signup-password-confirm" className="form-label">
            Password Confirmation
          </label>
          <input
            type="password"
            className={`form-control ${
              validPasswordConfirmation ? null : "is-invalid"
            }`}
            id="signup-password-confirm"
          />
          <div className="invalid-feedback">Passwords do not match!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="signup-name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="signup-name"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="signup-surname" className="form-label">
            Surname
          </label>
          <input
            type="text"
            className="form-control"
            id="signup-surname"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="signup-phone-number" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="signup-phone-number"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="signup-address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="signup-address"
            required
          />
          <div className="invalid-feedback">
            Please provide a valid address.
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="signup-city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="signup-city"
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="signup-province" className="form-label">
            Province
          </label>
          <select className="form-select" id="signup-province" required>
            <option selected disabled value="">
              Choose...
            </option>
            {provinceList}
          </select>
          <div className="invalid-feedback">
            Please select a valid province.
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="signup-postal-code" className="form-label">
            Postal Code
          </label>
          <input
            type="text"
            className="form-control"
            id="signup-postal-code"
            required
          />
          <div className="invalid-feedback">
            Please provide a valid postal code.
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </>
  );
}
