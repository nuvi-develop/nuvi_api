"use strict";
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define(
    "Food",
    {
      foodName: DataTypes.STRING,
      information: DataTypes.STRING,
      servingAmount: DataTypes.FLOAT
    },
    {
      underscored: true
    }
  );
  Food.associate = function(models) {
    Food.hasMany(models.PlateWaste);
    Food.hasMany(models.OverMadeWaste);
    Food.hasMany(models.KitchenWaste);
    Food.hasMany(models.ExpectEatVolume);

    Food.belongsToMany(models.MenuList, { through: models.MenuFoodJunction });
  };
  return Food;
};
