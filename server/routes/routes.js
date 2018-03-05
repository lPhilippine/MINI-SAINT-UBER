var express = require('express');
var router = express.Router();

// Require our controllers
var adController = require('../elements/ads/ad.controller'); 
var carController = require('../elements/cars/car.controller'); 
var companyController = require('../elements/company/company.controller'); 
var quoteController = require('../elements/quotes/quote.controller'); 
var ratingController = require('../elements/rating/rating.controller'); 
var userController = require('../elements/users/user.controller'); 

// Routes to adController
router.get('/ads/getAds', adController.getAds);
router.get('/ads/getAdsWarning',adController.getAdsWarning);
router.get('/ads/getDefaultAds',adController.getDefaultAds);
router.post('/ads/createAd',adController.createAd);

// Routes to carController
router.get('/car/createCar', carController.createCar);
router.post('/car/updateCar', carController.updateCar);
router.post('/car/deleteCar', carController.deleteCar);

// Routes to companyController
router.post('/company/createCompany', companyController.createCompany);
router.post('/company/updateCompany', companyController.updateCompany);

// Routes to quoteController
router.post('/quote/createQuote', quoteController.createQuote);
router.post('/quote/updateQuote', quoteController.updateQuote);
router.post('/quote/deleteQuote', quoteController.deleteQuote)

// Routes to ratingController
router.post('/rating/createRating', ratingController.createRating);
router.get('rating/getAverageRating', ratingController.getAverageRating);

// Routes to userController
router.post('/users/createUser', userController.createUser);  
router.post('/users/login', userController.login); 

module.exports = router;