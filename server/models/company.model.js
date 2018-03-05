'use strict';
module.exports = (sequelize, DataTypes) => {
    var Company = sequelize.define('Company', {

        // Company id -> Primary Key
        id_co: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        // Company name
        name_co: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        // SIRET
        siret: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // NAF
        naf: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        // KBIS scanned
        kbis: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        // Phone
        tel_co: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // Address
        address_co: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        // Postal Code
        postal_code_co: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // City
        city_co: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        // Photo
        photo_co: {
            type: DataTypes.STRING(1000),
            allowNull: true
        },
        // Boss, owner
        boss_co: {
            type: DataTypes.STRING(25),
            allowNull: true
        },
        // Company date of creation
        creation_co: {
            type: DataTypes.DATE,
            allowNull: false
        },
        // Password
        password_co: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        // Days availability
        opening_day: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        // Hours availability (text format)
        opening_time: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        // Hours non availability (text format)
        closing_time: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        // Night service ?
        night_service: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        // Email company
        email_co: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
            classMethods: {
                associate: function (models) {
                    // associations, foreign keys
                    /*
                    *   ALTER TABLE USER ADD CONSTRAINT FK_USER_id_co FOREIGN KEY (id_co) REFERENCES COMPANY(id_co);
                    *   ALTER TABLE AD ADD CONSTRAINT FK_AD_id_co FOREIGN KEY (id_co) REFERENCES COMPANY(id_co);
                    *   ALTER TABLE RATING ADD CONSTRAINT FK_RATING_id_co FOREIGN KEY (id_co) REFERENCES COMPANY(id_co);
                    *   ALTER TABLE QUOTE ADD CONSTRAINT FK_QUOTE_id_co FOREIGN KEY (id_co) REFERENCES COMPANY(id_co);
                    */
                    Company.hasMany(models.User, { foreignKey: 'id_co' });
                    Company.hasMany(models.Ad, { foreignKey: 'id_co' });
                    Company.hasMany(models.Rating, { foreignKey: 'id_co' });
                    Company.hasMany(models.Quote, { foreignKey: 'id_co' });

                    /*
                    *   ALTER TABLE COMPANY ADD CONSTRAINT FK_COMPANY_id_ad FOREIGN KEY (id_ad) REFERENCES AD(id_ad);
                    */
                    Company.belongsTo(models.Ad, { foreignKey: 'id_ad' });
                }
            }
        });
    return Company;
};