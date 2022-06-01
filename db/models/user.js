"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      role_id: {
        type: DataTypes.INTEGER,
        model: "roles",
        key: "id",
        onDelete: "cascade",
      },
      email: DataTypes.CITEXT,
      password: DataTypes.STRING(50),
      name: DataTypes.STRING(50),
      surname: DataTypes.STRING(50),
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      phone_number: DataTypes.STRING,
    },
    {
      underscored: true,
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
