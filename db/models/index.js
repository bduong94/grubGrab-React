require("dotenv").config();

const {
  host,
  user,
  password,
  database,
  dialect,
  pool,
} = require("../../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: dialect,
  operatorsAliases: false,
  pool: pool,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Table definitions for database
db.roles = require("./role.model")(sequelize, Sequelize);

module.exports = db;
