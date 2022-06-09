const users = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();

module.exports = (app) => {
  //Create User
  router.post("/", users.create);

  app.use("/api/users", router);
};
