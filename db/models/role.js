"use strict";

// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

// const Roles = sequelize.define(
//   "Roles",
//   {
//     // Model attributes are defined here
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     // Other model options go here
//   }
// );

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Roles.init(
    {
      name: DataTypes.STRING,
    },
    {
      underscored: true,
      sequelize,
      modelName: "Roles",
    }
  );
  return Roles;
};
