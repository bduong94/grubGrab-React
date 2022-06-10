const users = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();

module.exports = (app) => {
  //Create User
  router.post("/", users.create);

  //Login user
  router.get("/", users.findOne);

  //Get User Information
  router.get("/:id", users.getInformation);

  app.use("/api/user", router);
};
