const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile_controller');
const profileValidationRules = require('../validation/profile');

//get user profile
router.get('/', profileController.getProfile);

//uppdatera uppgifter
//add validation rules
router.put('/', profileValidationRules.updateRules, profileController.updateProfile);

router.post('/books', profileValidationRules.addBookRules, profileController.addBook);


//get user's books
router.get('/books', profileController.getBooks);

module.exports = router;
