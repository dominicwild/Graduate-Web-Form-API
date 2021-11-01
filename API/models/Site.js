"use strict";
module.exports = (sequelize, DataTypes) => {
  const { STRING, INTEGER, BOOLEAN } = DataTypes;

  const Site = sequelize.define(
    "Site",
    {
      id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: STRING
      }
    },
    {}
  );
  Site.associate = function({User, Site}) {
    Site.hasOne(User, {
      onDelete: "RESTRICT"
    })
  };
  return Site;
};
