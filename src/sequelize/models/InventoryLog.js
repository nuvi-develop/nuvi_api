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
      recordDate: {
        type: DataTypes.DATE,
        primaryKey: true
      },
      order: DataTypes.INTEGER,
      use: DataTypes.INTEGER,
      stockDelta: DataTypes.INTEGER,
      cost: DataTypes.INTEGER
    },
    {}
  );
  InventoryLog.associate = function(models) {
    InventoryLog.belongsTo(models.InventoryIngredient);
  };
  return InventoryLog;
};
