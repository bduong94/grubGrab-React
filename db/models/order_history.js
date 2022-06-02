"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order_histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order_histories.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        model: "users",
        key: "id",
        onDelete: "cascade",
      },
      total: { type: DataTypes.INTEGER, allowNull: false },
      order_date: { type: DataTypes.DATE, allowNull: false },
      completed_date: DataTypes.DATE,
    },
    {
      underscored: true,
      sequelize,
      modelName: "Order_histories",
    }
  );
  return Order_histories;
};
