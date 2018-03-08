var express = require('express');
var router = express.Router();
var CoursesController = require('../controllers/courses.controller')

/* GET courses page. */
router.get('/', CoursesController.getCourses);

module.exports = router;