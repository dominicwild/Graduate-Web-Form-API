'use strict';
module.exports = (sequelize, DataTypes) => {

  const { STRING, INTEGER, BOOLEAN } = DataTypes;

  const StudyField = sequelize.define('StudyField', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: STRING
    }
  }, {});
  StudyField.associate = function({User, StudyField}) {
    StudyField.hasOne(User, {
      onDelete: "RESTRICT"
    });
  };
  return StudyField;
};