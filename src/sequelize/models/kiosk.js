'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kiosk = sequelize.define('Kiosk', {
    serial_number:DataTypes.STRING,
    start_date: DataTypes.DATEONLY,
    end_date:DataTypes.DATEONLY,
    isUsed: DataTypes.BOOLEAN
  }, {});
  Kiosk.associate = function(models) {
    Kiosk.belongsTo(models.Department)

    Kiosk.hasMany(models.Plate,{as:'kiosk_in'})
    Kiosk.hasMany(models.Plate,{as:'kiosk_out'})
  };
  return Kiosk;
};