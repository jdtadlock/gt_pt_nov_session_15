'use strict';
module.exports = function(sequelize, DataTypes) {
  var Note = sequelize.define('note', {
	  title: {
	    type: DataTypes.STRING
	  },
	  details: {
	    type: DataTypes.TEXT
	  }
	});

  return Note;
}