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
export const validateEmail = (email) => {
  return email.includes("@");
};

export const validatePassword = (password) => {
  const upper = /[A-Z]/.test(password);
  const lower = /[a-z]/.test(password);
  const length = password.length >= 8;

  return upper && lower;
};

//API Calls
export const createUser = async (userInformation) => {
  await axios.post("http://localhost:8080/api/user", userInformation);
  return;
};

export const getUserID = async (email) => {
  const params = { email };
  console.log(params);
  const userID = await axios.get("http://localhost:8080/api/user/setUser", {
    params,
  });

  return userID;
};
