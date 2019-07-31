'use strict';
const uuidv4 = require('uuid/v4');

// Contains authentication information for volunteer accounts, as well as
// references to their work logs
module.exports = (sequelize, DataTypes) => {
  const Volunteer = sequelize.define(
    'Volunteer',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => uuidv4(),
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

  Volunteer.associate = function(models) {
    Volunteer.hasMany(models.Log);
  };

  return Volunteer;
};
