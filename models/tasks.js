'use strict';
module.exports = function(sequelize, DataTypes) {
  var tasks = sequelize.define('tasks', {
    task: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tasks;
};