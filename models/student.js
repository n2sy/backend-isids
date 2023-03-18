const { string, number } = require('joi');
const Joi = require('joi');

const tab_students = [
    {
        id: 1,
        prenom: 'Safa',
        classe: 'ISIE'
    },
    {
        id: 2,
        prenom: 'Siwar',
        classe: 'ISIE'
    }
]

const new_student_validation = Joi.object({
    prenom: Joi.string().min(3).max(10),
    age: Joi.number().positive(),
    classe: Joi.string().min(5)
});


module.exports = { new_student_validation, tab_students };
