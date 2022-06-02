"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order_histories_menu_items_bridge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order_histories_menu_items_bridge.init(
    {
      order_history_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        model: "order_histories",
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
      modelName: "Order_histories_menu_items_bridge",
    }
  );
  return Order_histories_menu_items_bridge;
};
