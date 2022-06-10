const db = require("../models");
const User = db.Users;

// Create and save a new user
exports.create = (req, res) => {
  //   if (!req.body.name) {
  //     res.status(400).send({
  //       message: "Content cannot be empty!",
  //     });
  //     return;
  //   }
  //   const role = {
  //     name: req.body.name,
  //   };
  //   Role.create(role)
  //     .then((data) => {
  //       res.send(data);
  //     })
  //     .catch((err) => {
  //       res.status(500).send({
  //         message: err.message || "Some error occured while creating the role!",
  //       });
  //     });

  console.log(req.body);
  if (!req.body.email) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });

    return;
  }

  const user = {
    role_id: 1,
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    surname: req.body.surname,
    phone_number: req.body.phoneNumber,
    address: req.body.address,
    city: req.body.city,
    province: req.body.province,
    postal_code: req.body.postalCode,
  };

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the user",
      });
    });
};

// Retrieve all Tests from the database
exports.findAll = (req, res) => {
  //   Role.findAll()
  //     .then((data) => {
  //       res.send(data);
  //     })
  //     .catch((err) => {
  //       res.status(500).send({
  //         message: err.message || "Some error occured while retrieving the role!",
  //       });
  //     });
};

exports.getInformation = async (req, res) => {
  if (!req.body.id) {
    res.status(400).send({
      message: "User is not logged in",
    });
  }

  await User.findByPk(req.body.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while finding the user",
      });
    });
};

// Find the user with the given ID
exports.findOne = (req, res) => {};

// Update a Tests with the speicfic id in the request
exports.delete = (req, res) => {};

// Delete all Tests from the database
exports.deleteAll = (req, res) => {};

// Find all published Tests
exports.findAllPublished = (req, res) => {};
