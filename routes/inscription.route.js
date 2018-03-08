var express = require('express');
var router = express.Router();
var InscriptionController = require('../controllers/inscription.controller')

/* GET courses page. */
router.get('/', InscriptionController.getInscription);

router.post('/traitement',InscriptionController.postInscription);

module.exports = router;