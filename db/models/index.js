require("dotenv").config();

const {
  host,
  user,
  password,
  database,
  dialect,
} = require("../../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: dialect,
  operatorsAliases: false,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tests = require("./test.model")(sequelize, Sequelize);

module.exports = db;
