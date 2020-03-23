"use strict";
module.exports = (sequelize, DataTypes) => {
  const PersonalInfoLog = sequelize.define(
    "PersonalInfoLog",
    {
      personal_number: DataTypes.STRING,
      facePicture: DataTypes.STRING,
      job: DataTypes.STRING,
      name: DataTypes.STRING,
      age: DataTypes.TINYINT,
      gender: DataTypes.CHAR(1),
      height: DataTypes.FLOAT,
      weight: DataTypes.FLOAT,
      grade: DataTypes.TINYINT,
      class: DataTypes.TINYINT
    },
    {}
  );
  PersonalInfoLog.associate = function(models) {
    PersonalInfoLog.belongsTo(models.User, { foreignKey: "nuvi_user_id" });
  };
  return PersonalInfoLog;
};
