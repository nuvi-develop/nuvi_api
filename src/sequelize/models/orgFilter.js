"use strict";
module.exports = (sequelize, DataTypes) => {
  const OrgFilter = sequelize.define(
    "OrgFilter",
    {
      grade: DataTypes.INTEGER,
      class: DataTypes.INTEGER,
      gradeName: DataTypes.STRING,
      className: DataTypes.STRING
    },
    {}
  );
  OrgFilter.associate = function(models) {
    OrgFilter.belongsTo(models.Department);
  };
  return OrgFilter;
};
