var models = require('../../models');
var debug = require('debug')('server:server');
var NodeResponse = require('../../models/virtual-models/node-response');


class CarController {

    // Car Creation
    createCar(req, res) {
        var response = new NodeResponse();

        models.Car.create({
            car_brand: req.body.car_brand,
            car_version: req.body.car_version,
            car_model: req.body.car_model,
            in_service: req.body.in_service,
            photo_car: req.body.photo_car,
            id_user: req.body.id_user
        });
    }

    // Car Update
    updateCar(req, res) {
        var response = new NodeResponse();

        models.Car.findOne({ where: { id_car: req.body.id_car } })
            .then(function (car) {

                _checkIfNotAssigned(req, car);

                models.Car.update({
                    car_brand: req.body.car_brand,
                    car_version: req.body.car_version,
                    car_model: req.body.car_model,
                    in_service: req.body.in_service,
                    photo_car: req.body.photo_car
                }, {
                        where: { id_car: req.body.id_car }
                    })
            })
    }

    // Delete Car
    deleteCar(req, res) {
        var response = new NodeResponse();

        models.Car.destroy({
            where: {
                id_car: req.body.id_car
            }
        })
    }

    // Avoid undefined / null or empty fields update
    _checkIfNotAssigned(req, car) {

        if (!req.body.car_brand) {
            req.body.car_brand = car.car_brand;
        }
        if (!req.body.car_version) {
            req.body.car_version = car.car_version;
        }
        if (!req.body.car_model) {
            req.body.car_model = car.car_model;
        }
        if (!req.body.in_service) {
            req.body.in_service = car.in_service;
        }
        if (!req.body.photo_car) {
            req.body.photo_car = car.photo_car;
        }
    }
}

module.exports = new CarController();