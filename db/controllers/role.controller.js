const db = require("../models");
const Role = db.Roles;
// const Op = db.Sequelize.Op;

// Create and Save a new Role
exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });

    return;
  }

  const role = {
    name: req.body.name,
  };

  Role.create(role)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the role!",
      });
    });
};

// Retrieve all Tests from the database
exports.findAll = (req, res) => {
  Role.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving the role!",
      });
    });
};

// Find a single Tests with an id
exports.findOne = (req, res) => {};

// Update a Tests with the speicfic id in the request
exports.delete = (req, res) => {};

// Delete all Tests from the database
exports.deleteAll = (req, res) => {};

// Find all published Tests
exports.findAllPublished = (req, res) => {};
