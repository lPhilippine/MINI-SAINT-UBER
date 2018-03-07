var models = require('../models');

'use strict';
module.exports = (sequelize, DataTypes) => {
    var Tarifs = sequelize.define('Tarifs', {

        // tf_id -> Primary Key
        tf_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        // tarifs libelle
        tf_libelle: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        // prix courses
        tf_prixttc_km: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
    });
    return Tarifs;
};