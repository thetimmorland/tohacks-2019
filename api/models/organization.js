'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING
  }, {});
  Organization.associate = function(models) {
    Organization.hasMany(models.Posting);
  };
  return Organization;
};
