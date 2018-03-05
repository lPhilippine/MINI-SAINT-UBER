// add request headers for server communication
function setHeaders(req, res, next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    }

// add status 200 when server well responds with method OPTIONS
function setStatusOptions(req, res,next) {
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    }else{
        next();
    }
}

module.exports = {
    setHeaders: setHeaders,
    setStatusOptions: setStatusOptions
}