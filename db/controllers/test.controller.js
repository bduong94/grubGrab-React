const db = require("../models");
const Test = db.tests;
const Op = db.Sequelize.Op;

// Create and Save a new Test
exports.create = (req, res) => {};

// Retrieve all Tests from the database
exports.findAll = (req, res) => {};

// Find a single Tests with an id
exports.findOne = (req, res) => {};

// Update a Tests with the speicfic id in the request
exports.delete = (req, res) => {};

// Delete all Tests from the database
exports.deleteAll = (req, res) => {};

// Find all published Tests
exports.findAllPublished = (req, res) => {};
