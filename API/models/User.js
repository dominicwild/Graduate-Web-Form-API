"use strict";
module.exports = (sequelize, DataTypes) => {
  const { STRING, INTEGER, BOOLEAN, UUID, UUIDV4 } = DataTypes;
  const User = sequelize.define(
    "User",
    {
      id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      firstName: {
        type: STRING
      },
      lastName: {
        type: STRING
      },
      email: {
        type: STRING
      },
      mobile: {
        type: STRING,
        allowNull: true
      },
      completed: {
        type: BOOLEAN
      }
    },
    {}
  );
  User.associate = function({ User, Gender, Site, Location, Stream, StudyField }) {
    User.belongsTo(Gender);
    User.belongsTo(Location);
    User.belongsTo(Site);
    User.belongsTo(Stream);
    User.belongsTo(StudyField);
  };
  return User;
};
