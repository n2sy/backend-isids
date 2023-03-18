
const express = require('express');
const ctrl = require("../controllers/students");

const rt = express.Router();

rt.get('/all', ctrl.getAllStudents);
rt.post('/', ctrl.addStudent);
rt.get('/:id', ctrl.getOneStudent);

module.exports = rt;