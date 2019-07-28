'use strict';
module.exports = (sequelize, DataTypes) => {
  const Volunteer = sequelize.define('Volunteer', {
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING
  }, {});
  Volunteer.associate = function(models) {
    Volunteer.hasMany(models.Log);
  };
  return Volunteer;
};
