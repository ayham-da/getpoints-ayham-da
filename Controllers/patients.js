var patients = require('../data/patients')

function patientsController(req, res) {
    res.json(patients)
}

function patientController(req, res) {
    
    var patientId = req.params.id
    console.log(patientId)
    var patient = patients[patientId-1]
    res.json(patient)
}

exports.patients = patientsController
exports.patient = patientController