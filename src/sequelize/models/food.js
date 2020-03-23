"use strict";
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define(
    "Food",
    {
      food_name: DataTypes.STRING,
      information: DataTypes.STRING,
      serving_amount: DataTypes.FLOAT
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
    Food.hasMany(models.ExpectEatNumber);

    Food.belongsToMany(models.MenuList, { through: models.MenuFoodJunction });
  };
  return Food;
};
