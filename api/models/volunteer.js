'use strict';
const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const Volunteer = sequelize.define('Volunteer', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4(),
    },
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING
  }, {});

  Volunteer.associate = function(models) {
    Volunteer.hasMany(models.Log);
  };

  return Volunteer;
};
