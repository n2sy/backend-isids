
const express = require('express');
const ctrl = require("../controllers/cv");

const rt = express.Router();

rt.get('/candidats', ctrl.getAllCandidats);
rt.get('/candidats/:myid', ctrl.getCandidat);
rt.post('/candidats', ctrl.createCandidat);
rt.put('/candidats/:id', ctrl.updateCandidat);
rt.delete('/candidats/:id', ctrl.deleteCandidat);

module.exports = rt;