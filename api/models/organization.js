'use strict';
const uuidv4 = require('uuid/v4');

// contains authentication for organization accounts, as well as references to
// their job postings
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define(
    'Organization',
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
      }
    });

  Organization.associate = function(models) {
    Organization.hasMany(models.Posting);
  };

  return Organization;
};
