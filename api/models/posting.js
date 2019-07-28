'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posting = sequelize.define('Posting', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Posting.associate = function(models) {
    Posting.belongsTo(models.Organization);
    Posting.hasMany(models.Log);
  };
  return Posting;
};
