var express = require('express');
var router = express.Router();
var data =require('../data/patients')
var patientsController = require('../Controllers/patients')

router.get('/',patientsController.patients);
router.get('/:id',patientsController.patient);
  
  module.exports = router;