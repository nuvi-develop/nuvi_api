"use strict";
module.exports = (sequelize, DataTypes) => {
  const PersonalInfo = sequelize.define(
    "PersonalInfo",
    {
      nuvi_user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
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
  PersonalInfo.associate = function(models) {
    PersonalInfo.belongsTo(models.User, { foreignKey: "nuvi_user_id" });
  };

  PersonalInfo.hooks = function(models) {
    PersonalInfo.addHook("afterUpdate", (personalInfo, options) => {
      models.PersonalInfoLog.create({
        personal_number: personalInfo.personal_number,
        facePicture: personalInfo.facePicture,
        job: personalInfo.job,
        name: personalInfo.name,
        age: personalInfo.age,
        gender: personalInfo.gender,
        height: personalInfo.height,
        weight: personalInfo.weight,
        grade: personalInfo.grade,
        class: personalInfo.class,
        nuvi_user_id: personalInfo.nuvi_user_id
      });
    });
  };
  return PersonalInfo;
};
