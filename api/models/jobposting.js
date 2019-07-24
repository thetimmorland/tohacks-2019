'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobPosting = sequelize.define('JobPosting', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  JobPosting.associate = function(models) {
    // associations can be defined here
  };
  return JobPosting;
};