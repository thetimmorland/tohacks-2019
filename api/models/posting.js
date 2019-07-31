'use strict';
const uuidv4 = require('uuid/v4');

// contains information about volunteer opportunity
module.exports = (sequelize, DataTypes, uuid) => {
  const Posting = sequelize.define('Posting', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4(),
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});

  Posting.associate = function(models) {
    Posting.belongsTo(models.Organization);
    Posting.hasMany(models.Log);
  };

  return Posting;
};
