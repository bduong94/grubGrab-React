"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Menu_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Menu_items.init(
    {
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        model: "categories",
        key: "id",
        onDelete: "cascade",
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      price: { type: DataTypes.INTEGER, allowNull: false },
      description: DataTypes.TEXT,
      image_url: DataTypes.TEXT,
    },
    {
      underscored: true,
      sequelize,
      modelName: "Menu_items",
    }
  );
  return Menu_items;
};
