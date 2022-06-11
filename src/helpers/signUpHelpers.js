import axios from "axios";

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
