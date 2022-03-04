const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author_controller');
const authorValidationRules = require('../validation/author.js');


//5 olika requests vi kan göra mot authors

/* Get all resources */
router.get('/', authorController.index); //visar index över allt

/* Get a specific resource */
router.get('/:authorId', authorController.show); //vi vill hämta en specifik resurs

/* Store a new resource */
router.post('/', authorValidationRules.createRules, authorController.store); //store hade kunnat heta save el create

/* Update a specific resource */
router.put('/:authorId', authorValidationRules.updateRules, authorController.update);

/* Destroy a specific resource */
router.delete('/:authorId', authorController.destroy);

module.exports = router;
