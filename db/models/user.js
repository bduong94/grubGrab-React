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
        allowNull: false,
        model: "roles",
        key: "id",
        onDelete: "cascade",
      },
      email: {
        type: DataTypes.CITEXT,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      name: { type: DataTypes.STRING(50), allowNull: false },
      surname: { type: DataTypes.STRING(50), allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      city: { type: DataTypes.STRING, allowNull: false },
      country: { type: DataTypes.STRING, allowNull: false },
      phone_number: { type: DataTypes.STRING, allowNull: false },
    },
    {
      underscored: true,
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
