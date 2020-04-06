"use strict";
module.exports = (sequelize, DataTypes) => {
  const PersonalInfo = sequelize.define(
    "PersonalInfo",
    {
      nuviUserId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
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
  PersonalInfo.associate = function(models) {
    PersonalInfo.belongsTo(models.User, {
      foreignKey: "nuvi_user_id",
      onDelete: "cascade"
    });
    PersonalInfo.belongsTo(models.OrgFilter);
  };

  PersonalInfo.hooks = function(models) {
    PersonalInfo.addHook("afterUpdate", (personalInfo, options) => {
      models.PersonalInfoLog.create({
        personal_number: personalInfo.personal_number,
        facePicture: personalInfo.facePicture,
        job: personalInfo.job,

        age: personalInfo.age,
        gender: personalInfo.gender,
        height: personalInfo.height,
        weight: personalInfo.weight,
        nuvi_user_id: personalInfo.nuvi_user_id
      });
    });
  };
  return PersonalInfo;
};
