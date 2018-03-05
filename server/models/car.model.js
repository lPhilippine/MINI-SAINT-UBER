'use strict';
module.exports = (sequelize, DataTypes) => {
    var Car = sequelize.define('Car', {
        
        // Car id -> Primary Key
        id_car: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        // Car brand
        car_brand: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        // Car version
        car_version: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        // Car model
        car_model: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        // Start date of service
        in_service: {
            type: DataTypes.DATE,
            allowNull: false
        },
        // Photo
        photo_car: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        // Licence plate 
        licence_plate: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        // Serial number
        serial_number: {
            type: DataTypes.STRING(50),
            allowNull: false
        }

    }, {
            classMethods: {
                associate: function (models) {
                    // associations, foreign keys
                    /*
                    *   ALTER TABLE AD ADD CONSTRAINT FK_AD_id_car FOREIGN KEY (id_car) REFERENCES CAR(id_car);
                    */
                    Car.hasMany(models.Ad, { foreignKey: 'id_car' });

                    /*
                    *   ALTER TABLE CAR ADD CONSTRAINT FK_CAR_id_user FOREIGN KEY (id_user) REFERENCES USER(id_user);
                    */
                    Car.belongsTo(models.User, { foreignKey: 'id_user' });
                }
            }
        });
    return Car;
};