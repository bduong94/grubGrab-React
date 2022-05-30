const tests = require("../controllers/test.controller");
const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", tests.create);
};
