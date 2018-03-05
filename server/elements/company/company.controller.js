var models = require('../../models');
var debug = require('debug')('server:server');
var NodeResponse = require('../../models/virtual-models/node-response');


class CompanyController {

    // Company creation
    createCompany(req, res) {
        var response = new NodeResponse();

        models.Company.create({
            name_co: req.body.name_co,
            siret: req.body.siret,
            naf: req.body.name_co,
            kbis: req.body.kbis,
            tel_co: req.body.tel_co,
            adress_co: req.body.adress_co,
            postal_code_co: req.body.postal_code_co,
            city_co: req.body.city_co,
            photo_co: req.body.photo_co,
            boss_co: req.body.boss_co,
            creation_co: req.body.creation_co,
            password_co: req.body.password_co,
            opening_day: req.body.opening_day,
            opening_time: req.body.opening_time,
            closing_time: req.body.closing_time,
            night_service: req.body.night_service
        });
    }

    // Company update
    updateCompany(req, res) {
        var response = new NodeResponse();

        models.Company.findOne({ where: { id_co: req.body.id_co } })
            .then(function (company) {

                _checkIfNotAssigned(req, company);

                models.Company.update({
                    name_co: req.body.name_co,
                    siret: req.body.siret,
                    naf: req.body.name_co,
                    kbis: req.body.kbis,
                    tel_co: req.body.tel_co,
                    adress_co: req.body.adress_co,
                    postal_code_co: req.body.postal_code_co,
                    city_co: req.body.city_co,
                    photo_co: req.body.photo_co,
                    boss_co: req.body.boss_co,
                    creation_co: req.body.creation_co,
                    password_co: req.body.password_co,
                    opening_day: req.body.opening_day,
                    opening_time: req.body.opening_time,
                    closing_time: req.body.closing_time,
                    night_service: req.body.night_service
                }, {
                        where: { id_co: req.body.id_co }
                    })
            });
    }

    // Avoid undefined / null or empty fields update
    _checkIfNotAssigned(req, company) {
        if (!req.body.name_co) {
            req.body.name_co = company.name_co;
        }
        if (!req.body.siret) {
            req.body.siret = company.siret;
        }
        if (!req.body.naf) {
            req.body.naf = company.naf;
        }
        if (!req.body.kbis) {
            req.body.kbis = company.kbis;
        }
        if (!req.body.tel_co) {
            req.body.tel_co = company.tel_co;
        }
        if (!req.body.adress_co) {
            req.body.adress_co = company.tel_co;
        }
        if (!req.body.postal_code_co) {
            req.body.postal_code_co = company.postal_code_co;
        }
        if (!req.body.city_co) {
            req.body.city_co = company.city_co;
        }
        if (!req.body.photo_co) {
            req.body.photo_co = company.photo_co;
        }
        if (!req.body.boss_co) {
            req.body.boss_co = company.boss_co;
        }
        if (!req.body.creation_co) {
            req.body.creation_co = company.creation_co;
        }
        if (!req.body.password_co) {
            req.body.password_co = company.password_co;
        }
        if (!req.body.opening_day) {
            req.body.opening_day = company.opening_day;
        }
        if (!req.body.opening_time) {
            req.body.opening_time = company.opening_time;
        }
        if (!req.body.closing_time) {
            req.body.closing_time = company.closing_time;
        }
        if (!req.body.night_service) {
            req.body.night_service = company.night_service;
        }
    }
}

module.exports = new CompanyController();