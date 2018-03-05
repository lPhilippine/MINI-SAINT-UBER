var http = require('http');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

/*
 Setting all necessary structure for the server
 */
var headers = require('./middlewares/headers.middleware')
app.use(function (req, res, next) {
    // allow-cors
    headers.setHeaders(req, res, next)
    // allow preflight
    headers.setStatusOptions(req,res,next)
});

// Logger
app.use(logger('dev'));

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Static resources
app.use(express.static(path.join(__dirname, '/../public')));

// Routes definition
app.use('/api', require('./routes/routes'));

// Errors
var errorsHandler = require('./middlewares/errors-handler.middleware')
errorsHandler.setErrorHandler(app);

// Get port from environment and store in Express, else default port.
var port = process.env.PORT || 3000;
app.set('port', port);

// Create HTTP server.
var server = http.createServer(app);

// Adding listener on server
require('./helpers/server-listener').listen(server, port);

