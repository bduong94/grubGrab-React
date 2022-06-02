const roles = require("../controllers/role.controller");
const express = require("express");
const router = express.Router();

module.exports = (app) => {
  // Creates a new Test
  router.post("/", roles.create);

  // Retrieve all Tests
  router.get("/", roles.findAll);

  app.use("/api/roles", router);
};
