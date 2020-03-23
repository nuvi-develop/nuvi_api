'use strict';
module.exports = (sequelize, DataTypes) => {
  const OverMadeWaste = sequelize.define('OverMadeWaste', {
    eat_date: DataTypes.DATEONLY,
    bld: DataTypes.BOOLEAN,
    volume: DataTypes.FLOAT,
    picure_name: DataTypes.STRING
  }, {});
  OverMadeWaste.associate = function(models) {
    OverMadeWaste.belongsTo(models.Food)
    OverMadeWaste.belongsTo(models.Department)
  };
  return OverMadeWaste;
};