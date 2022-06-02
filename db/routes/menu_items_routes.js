const menuItems = require("../controllers/menu_items.controller");
const express = require("express");
const router = express.Router();

module.exports = (app) => {
  // Creates a new Test
  router.post("/", menuItems.create);

  // Retrieve all Tests
  router.get("/", menuItems.findAll);

  app.use("/api/menu_items", router);
};
