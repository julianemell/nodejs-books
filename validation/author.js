// Author validation rules


const { body, matchedData } = require('express-validator'); 
const currentYear = (new Date).getFullYear();

const createRules = [
    body('first_name').exists().isLength({min: 2, max: 255}),
    body('last_name').exists().isLength({min: 2, max: 255}),
    body('birthyear').exists().isInt({min: 1400, max: currentYear}),

];

const updateRules = [
    body('first_name').optional().isLength({min: 2, max: 255}),
    body('last_name').optional().isLength({min: 2, max: 255}),
    body('birthyear').optional().isLength({min: 1400, max: currentYear}),
];

module.exports = { //dessa hamnar i userValidationRules i routes/users
    createRules,
    updateRules
}