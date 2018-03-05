var models = require('../../models');
var debug = require('debug')('server:server');
var NodeResponse = require('../../models/virtual-models/node-response');


class UserController {
    // User creation
    createUser(req, res) {
        var response = new NodeResponse();
        models.User.create(
            {
                name_user: req.body.name_user,
                first_name_user: req.body.first_name_user,
                tel_user: req.body.tel_user,
                adress_user: req.body.adress_user,
                postal_code_user: req.body.postal_code_user,
                city_user: req.body.city_user,
                creation_user: new Date(),
                password_user: req.body.password_user,
                type_mec: req.body.type_mec,
                photo_user: req.body.photo_user
            })
            .then(function () {
                response.success = true;
                return res.json(JSON.stringify(response));
            }, function (error) {
                // TODO send critical error to front
                debug('Critical Error: ' + error)
            });
    }

    // User update
    updateUser(req, res) {
        var response = new NodeResponse();

        models.User.findOne({ where: { id_user: req.body.id_user } }).then(function (user) {

            _checkIfNotAssigned(req, user);

            models.User.update({
                name_user: req.body.name_user,
                first_name_user: req.body.first_name_user,
                tel_user: req.body.tel_user,
                adress_user: req.body.adress_user,
                postal_code_user: req.body.postal_code_user,
                city_user: req.body.city_user,
                password_user: req.body.password_user,
                type_mec: req.body.type_mec,
                photo_user: req.body.photo_user
            }, {
                    where: { id_user: req.body.id_user }
                })
        })
    }

    // Find User by its id
    findUserById(req, res) {
        var response = new NodeResponse();

        models.User.findOne({ where: { id_user: req.body.id_user } })
    }

    // Login User
    login(req, res) {
        var response = new NodeResponse();

        models.User.findOne({
            where: { email_user: req.body.email_user }
        }).then(function (user) {
            var dataArray = [];
            if (user == null) {
                models.Company.findOne({
                    where: { email_co: req.body.email_user }
                }).then(function (user_co) {
                    if (user_co == null) {
                        debug("api login : user not found");
                        response.error = '001';
                    } else {
                        if (user_co.password_co === req.body.password_user) {
                            debug("api login : user connected");
                            response.success = true;
                            // TODO precise type: user / company ?
                        } else {
                            debug("api login : wrong password");
                            response.error = '002';
                        }
                    }
                });
            } else {
                if (user.password_user === req.body.password_user) {
                    debug("api login : user connected");
                    response.success = true;
                    response.data = "car_driver = true";
                } else {
                    debug("api login : wrong password");
                    response.error = '002';
                }
            }
            return res.json(JSON.stringify(response));
        }, function (error) {
            // TODO send critical error to front
            debug('Critical Error: ' + error)
        });
    }

    // Avoid undefined / null or empty fields update
    _checkIfNotAssigned(req, user) {
        if (!req.body.name_user) {
            req.body.name_user = user.name_user;
        }
        if (!req.body.first_name_user) {
            req.body.first_name_user = user.first_name_user;
        }
        if (!req.body.tel_user) {
            req.body.tel_user = user.tel_user;
        }
        if (!req.body.adress_user) {
            req.body.adress_user = user.adress_user;
        }
        if (!req.body.postal_code_user) {
            req.body.postal_code_user = user.postal_code_user;
        }
        if (!req.body.city_user) {
            req.body.city_user = user.city_user;
        }
        if (!req.body.password_user) {
            req.body.password_user = user.password_user;
        }
        if (!req.body.type_mec) {
            req.body.type_mec = user.type_mec;
        }
        if (!req.body.photo_user) {
            req.body.photo_user = user.photo_user;
        }
    }
}

module.exports = new UserController();