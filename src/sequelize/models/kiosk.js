"use strict";
module.exports = (sequelize, DataTypes) => {
  const Kiosk = sequelize.define(
    "Kiosk",
    {
      serialNumber: DataTypes.STRING,
      startDate: DataTypes.DATEONLY,
      endDate: DataTypes.DATEONLY,
      isUsed: DataTypes.BOOLEAN
    },
    {}
  );
  Kiosk.associate = function(models) {
    Kiosk.belongsTo(models.Department);

    Kiosk.hasMany(models.Plate, { foreignKey: "kiosk_in_id" });
    Kiosk.hasMany(models.Plate, { foreignKey: "kiosk_out_id" });
  };
  return Kiosk;
};
