'use strict';
module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('User', {

		// User id -> primary key
		id_user: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
            allowNull: false
		},
		// Name
		name_user: {
			type: DataTypes.STRING(25),
			allowNull: false
		},
		// FirstName
		first_name_user: {
			type: DataTypes.STRING(25),
			allowNull: false
		},
		// Phone 
		tel_user: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		// Address
		address_user: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		// PostalCode
		postal_code_user: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		// City
		city_user: {
			type: DataTypes.STRING(25),
			allowNull: false
		},
		// Date of creation
		creation_user: {
			type: DataTypes.DATE,
			allowNull: false
		},
		// Password
		password_user: {
			type: DataTypes.STRING(25),
			allowNull: false
		},
		// Photo
		photo_user: {
			type: DataTypes.STRING(500),
			allowNull: true
		}, 
		// Email
		email_user: {
			type: DataTypes.STRING(25),
			allowNull: false
		}
	}, {
			classMethods: {
				associate: function (models) {
					// associations, foreign keys
					/*
					 *   ALTER TABLE AD ADD CONSTRAINT FK_AD_id_user FOREIGN KEY (id_user) REFERENCES USER(id_user);
					 *   ALTER TABLE CAR ADD CONSTRAINT FK_CAR_id_user FOREIGN KEY (id_user) REFERENCES USER(id_user);
					 *   ALTER TABLE RATING ADD CONSTRAINT FK_RATING_id_user FOREIGN KEY (id_user) REFERENCES USER(id_user);
					 */
					User.hasMany(models.Ad, {
						foreignKey: 'id_user'
					});
					User.hasMany(models.Car, {
						foreignKey: 'id_user'
					});
					User.hasMany(models.Rating, {
						foreignKey: 'id_user'
					});

					/*
					 *   ALTER TABLE USER ADD CONSTRAINT FK_USER_id_co FOREIGN KEY (id_co) REFERENCES COMPANY(id_co);
					 */
					User.belongsTo(models.Company, {
						foreignKey: 'id_co'
					});
				}
			}
		});
	return User;
};