'use strict';
module.exports = (sequelize, DataTypes) => {

  const { STRING, INTEGER, BOOLEAN } = DataTypes;

  const Stream = sequelize.define('Stream', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: STRING
    }
  }, {});
  Stream.associate = function({User, Stream}) {
    Stream.hasOne(User, {
      onDelete: "RESTRICT"
    })
  };
  return Stream;
};