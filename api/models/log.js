'use strict';
module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    description: DataTypes.STRING,
    hours: DataTypes.DECIMAL
  }, {});
  Log.associate = function(models) {
    Log.belongsTo(models.Posting);
    Log.belongsTo(models.Volunteer);
  };
  return Log;
};
