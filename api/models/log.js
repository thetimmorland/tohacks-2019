'use strict';
const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4(),
    },
    description: DataTypes.STRING,
    hours: DataTypes.DECIMAL
  }, {});

  Log.associate = function(models) {
    Log.belongsTo(models.Posting);
    Log.belongsTo(models.Volunteer);
  };

  return Log;
};
