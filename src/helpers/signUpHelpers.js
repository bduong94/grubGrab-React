import axios from "axios";

//Sign-up Variables
export const provinces = [
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

//Input Validations
export const validateEmail = async (email) => {
  const userInfo = await getUserInformation(email);
  const userID = userInfo.data.id;
  const validEmailFormat = email.includes("@");

  if (!Number.isInteger(userID)) {
    return validEmailFormat;
  } else {
    return false;
  }
};

export const validatePassword = (password) => {
  const validatePassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(
    password
  );

  return validatePassword;
};

export const validatePasswordConfirmation = (
  password,
  passwordConfirmation
) => {
  return password === passwordConfirmation;
};

//API Calls
export const createUser = async (userInformation) => {
  await axios.post("http://localhost:8080/api/user", userInformation);
  return;
};

export const getUserInformation = async (email) => {
  const params = { email };
  const userInformation = await axios.get(
    "http://localhost:8080/api/user/setUser",
    {
      params,
    }
  );

  return userInformation;
};
