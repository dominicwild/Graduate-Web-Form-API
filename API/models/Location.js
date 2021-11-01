"use strict";
module.exports = (sequelize, DataTypes) => {
  const { STRING, INTEGER, BOOLEAN } = DataTypes;

  const Location = sequelize.define(
    "Location",
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
  Location.associate = function({ Location, User }) {
    Location.hasOne(User, {
      onDelete: "RESTRICT"
    });
  };
  return Location;
};
