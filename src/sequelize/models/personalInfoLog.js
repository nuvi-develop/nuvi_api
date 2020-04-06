"use strict";
module.exports = (sequelize, DataTypes) => {
  const PersonalInfoLog = sequelize.define(
    "PersonalInfoLog",
    {
      personalNumber: DataTypes.STRING,
      facePicture: DataTypes.STRING,
      job: DataTypes.STRING,

      age: DataTypes.TINYINT,
      gender: DataTypes.CHAR(1),
      height: DataTypes.FLOAT,
      weight: DataTypes.FLOAT
    },
    {}
  );
  PersonalInfoLog.associate = function(models) {
    PersonalInfoLog.belongsTo(models.User, {
      foreignKey: "nuvi_user_id",
      onDelete: "cascade"
    });
    PersonalInfoLog.belongsTo(models.OrgFilter);
  };
  return PersonalInfoLog;
};
