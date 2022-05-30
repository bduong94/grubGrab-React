const db = require("../models");
const Test = db.tests;
const Op = db.Sequelize.Op;

// Create and Save a new Test
exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });

    return;
  }

  const test = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.publsihed : false,
  };

  Test.create(test)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the test!",
      });
    });
};

// Retrieve all Tests from the database
exports.findAll = (req, res) => {
  Test.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving the test!",
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
