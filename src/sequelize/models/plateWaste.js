'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlateWaste = sequelize.define('PlateWaste', {
    eating_date: DataTypes.DATEONLY,
    bld: DataTypes.STRING(1),
    eating_time: DataTypes.TIME,
    volume_served: DataTypes.FLOAT,
    volume_left: DataTypes.FLOAT,

  }, {
    underscored:true
  });
  PlateWaste.associate = function(models) {
    PlateWaste.belongsTo(models.Food)
    PlateWaste.belongsTo(models.Plate)
    PlateWaste.belongsTo(models.Department)
    PlateWaste.belongsTo(models.User,{foreignKey:'nuvi_user_id'})
  };
  return PlateWaste;
};