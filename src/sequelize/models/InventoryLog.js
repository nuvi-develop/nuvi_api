"use strict";
module.exports = (sequelize, DataTypes) => {
  const InventoryLog = sequelize.define(
    "InventoryLog",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      created_at: {
        type: DataTypes.DATE,
        primaryKey: true
      },
      order: DataTypes.INTEGER,
      use: DataTypes.INTEGER,
      stock: DataTypes.INTEGER
    },
    {}
  );
  InventoryLog.associate = function(models) {
    InventoryLog.belongsTo(models.InventoryIngredient);
  };
  return InventoryLog;
};
