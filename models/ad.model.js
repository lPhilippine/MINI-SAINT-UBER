var models = require('../models');

'use strict';
module.exports = (sequelize, DataTypes) => {
	var Ad = sequelize.define('Ad', {

		// Ad id -> Primary Key
		id_ad: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		// Longitude of warning ad
		longitude: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		// Token of approval
		token: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		// Decription of ad
		description_ad: {
			type: DataTypes.STRING(5000),
			allowNull: false
		},
		// Is accepted ?
		accept_ad: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
		// Name, title of ad
		name_ad: {
			type: DataTypes.STRING(25),
			allowNull: false
		},
		// Date online 
		date_ad: {
			type: DataTypes.DATE,
			allowNull: false
		},
		// Is ad warning or not (String and not boolean for future evolutions)
		ad_type: {
			type: DataTypes.STRING(25),
			allowNull: false
		},
		// Photo
		photo_ad: {
			type: DataTypes.STRING(500)
		},
		// Latitude for warning ad
		latitude: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		// Distance calculated for warning ad
		distance: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		// Date of repair
		repair_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		classMethods: {
			associate: function(models) {
				
			}
		}
	});
	return Ad;
};