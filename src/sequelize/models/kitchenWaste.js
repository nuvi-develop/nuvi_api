"use strict";
module.exports = (sequelize, DataTypes) => {
  const KitchenWaste = sequelize.define(
    "KitchenWaste",
    {
      eatDate: DataTypes.DATEONLY,
      bld: DataTypes.BOOLEAN,
      volume: DataTypes.FLOAT,
      picureName: DataTypes.STRING
    },
    {}
  );
  KitchenWaste.associate = function(models) {
    KitchenWaste.belongsTo(models.Food);
    KitchenWaste.belongsTo(models.Department);
  };
  return KitchenWaste;
};
