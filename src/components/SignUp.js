import React from "react";
import axios from "axios";
import Options from "./Options";

export default function SignUp() {
  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
  ];

  //Create Options for Province
  const provinceList = provinces.map((province, index) => {
    return <Options key={index} option={province} />;
  });

  //Helper Functions
  const createUser = async (userInformation) => {
    await axios.post("http://localhost:8080/api/user", userInformation);
    return;
  };

  const getUserID = async (email) => {
    const params = { email };
    console.log(params);
    const userID = await axios.get("http://localhost:8080/api/user/setUser", {
      params,
    });

    return userID;
  };

  const submitInformation = (e) => {
    e.preventDefault();

    const callCreateUser = async (userInformation) =>
      await createUser(userInformation);
    const callGetUserID = async (email) => await getUserID(email);

    const userInformation = {
      email: e.target[0].value,
      password: e.target[1].value,
      name: e.target[2].value,
      surname: e.target[3].value,
      phoneNumber: e.target[4].value,
      address: e.target[5].value,
      city: e.target[6].value,
      province: e.target[7].value,
      postalCode: e.target[8].value,
    };

    callCreateUser(userInformation)
      .then(() => {
        callGetUserID(userInformation.email).then((response) =>
          console.log(response.data)
        );
      })
      .catch((err) => console.log(err.message));
  };

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
            className="form-control"
            id="signup-email"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="signup-password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="signup-password"
            required
          />
          <div className="valid-feedback">Looks good!</div>
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
