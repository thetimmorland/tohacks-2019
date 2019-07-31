'use strict';
const uuidv4 = require('uuid/v4');

// Contains data about completed volunteer work
module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define(
    'Log',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => uuidv4(),
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hours: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    });

  Log.associate = function(models) {
    Log.belongsTo(models.Posting);
    Log.belongsTo(models.Volunteer);
  };

  return Log;
};
