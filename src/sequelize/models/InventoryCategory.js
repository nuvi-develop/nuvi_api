"use strict";
module.exports = (sequelize, DataTypes) => {
  const InventoryCategory = sequelize.define(
    "InventoryCategory",
    {
      name: DataTypes.STRING
    },
    {}
  );
  InventoryCategory.associate = function(models) {
    InventoryCategory.belongsTo(models.Department);
    InventoryCategory.hasMany(models.InventoryIngredient);
  };
  return InventoryCategory;
};
