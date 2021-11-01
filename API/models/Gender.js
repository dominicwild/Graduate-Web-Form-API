"use strict";
module.exports = (sequelize, DataTypes) => {
  const { STRING, INTEGER, BOOLEAN } = DataTypes;

  const Gender = sequelize.define(
    "Gender",
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
  Gender.associate = function({ User, Gender }) {
    Gender.hasOne(User, {
      onDelete: "RESTRICT"
    });
  };
  return Gender;
};
