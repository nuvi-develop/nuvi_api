'use strict';
module.exports = (sequelize, DataTypes) => {
  const KitchenWaste = sequelize.define('KitchenWaste', {
    eat_date: DataTypes.DATEONLY,
    bld: DataTypes.BOOLEAN,
    volume: DataTypes.FLOAT,
    picure_name: DataTypes.STRING
  }, {});
  KitchenWaste.associate = function(models) {
    KitchenWaste.belongsTo(models.Food)
    KitchenWaste.belongsTo(models.Department)
  
  };
  return KitchenWaste;
};