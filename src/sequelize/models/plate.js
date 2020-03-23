'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plate = sequelize.define('Plate', {
    eating_date:DataTypes.DATEONLY,
    bld: DataTypes.CHAR(1),
    picture_in: DataTypes.STRING,
    picture_out: DataTypes.STRING,
    satisfaction: DataTypes.INTEGER.UNSIGNED,
    plate_point: DataTypes.INTEGER.UNSIGNED,
    time_in: DataTypes.TIME,
    time_out: DataTypes.TIME
  }, {});
  Plate.associate = function(models) {
    Plate.belongsTo(models.Kiosk,{as:'kiosk_in'})
    Plate.belongsTo(models.Kiosk,{as:'kiosk_out'})
    Plate.belongsTo(models.User,{foreignKey:'nuvi_user_id'})
    Plate.belongsTo(models.Department)

    Plate.hasMany(models.PlateWaste)
    
  };
  return Plate;
};