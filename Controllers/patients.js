var patients = require('../data/patients')

function patientsController(req, res) {
    res.json(patients)
}

function patientController(req, res) {
    var patientId = req.params.id
    var patient = patients[patientId]
    res.json(patient)
}

exports.patients = patientsController
exports.patient = patientController