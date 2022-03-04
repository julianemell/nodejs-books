const express = require('express');
const router = express.Router(); //stort R för att få ut routern ur express
const auth = require('../middlewares/auth');
const authController = require('../controllers/auth_controller');
const userValidationRules = require('../validation/user');

/* GET / */ 
router.get('/', (req, res, next) => {
	res.send({ success: true, data: { msg: 'oh, hi' }});
});

router.use('/authors', require('./authors'));
router.use('/books', require('./books'));
router.use('/profile', auth.validateJwtToken, require('./profile')); //funktionen heter basic, modulen heter auth

//login user and get a JWT token
router.post('/login', authController.login); 

//register a new user
router.post('/register', userValidationRules.createRules, authController.register); //registerController skapar vi controllermappen


module.exports = router;
