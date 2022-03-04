// Update profile validation rules


const { body, matchedData } = require('express-validator'); 
const models = require('../models');



const updateRules = [
    body('password').optional().isLength({min: 4}),
    body('first_name').optional().isLength({min: 2}),
    body('last_name').optional().isLength({min: 2}),
];

const addBookRules = [
	body('book_id').exists().isInt({ min: 1 }),
];

module.exports = { //dessa hamnar i userValidationRules i routes/users
    updateRules,
    addBookRules,
}