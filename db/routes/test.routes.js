const tests = require("../controllers/test.controller");
const express = require("express");
const router = express.Router();

module.exports = (app) => {
  // Creates a new Test
  router.post("/", tests.create);

  // Retrieve all Tests
  router.get("/", tests.findAll);

  app.use("/api/tests", router);
};
