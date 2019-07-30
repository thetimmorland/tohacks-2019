'use strict';
const uuidv4 = require('uuid/v4');

module.exports = (sequelize, DataTypes, uuid) => {
  const Posting = sequelize.define('Posting', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4(),
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});

  Posting.associate = function(models) {
    Posting.belongsTo(models.Organization);
    Posting.hasMany(models.Log);
  };

  return Posting;
};
