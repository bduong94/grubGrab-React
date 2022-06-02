"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ingredients_menu_items_bridge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ingredients_menu_items_bridge.init(
    {
      ingredients_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        model: "ingredients",
        key: "id",
        onDelete: "cascade",
      },
      menu_item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        model: "menu_items",
        key: "id",
        onDelete: "cascade",
      },
    },
    {
      underscored: true,
      sequelize,
      modelName: "Ingredients_menu_items_bridge",
    }
  );
  return Ingredients_menu_items_bridge;
};
