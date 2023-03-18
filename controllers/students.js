const Joi = require('joi');
const { tab_students, new_student_validation } = require("../models/student");

exports.getAllStudents = (req, res) => {
    res.send(tab_students)
}

exports.getOneStudent = (req, res) => {
    console.log(req.params.id);
    let selectedStudent = tab_students.find((element) => element.id == req.params.id);
    if (!selectedStudent)
        res.status(404).send({
            message: "This student doesnt exist"
        })
    res.status(200).send(selectedStudent);
}

exports.addStudent = (req, res) => {
    console.log(req.body);
    console.log(tab_students);

    const newValidator = new_student_validation.validate(req.body);
    if (newValidator.error) {
        console.log(newValidator.error.details[0].message);
        res.status(400).send({
            message: newValidator.error.details[0].message
        })
    }

    const newStudent = {
        id: tab_students.length + 1,
        firstName: req.body.prenom,
        class: req.body.classe,
    }

    tab_students.push(newStudent);
    res.status(201).send(tab_students);
}