const express = require('express');
const registerController = require('../controllers/register-controller');
const validatorRegister = require('../middleware/register-validator');

const router = express.Router();
//const LoginController = require('../controllers/register-controller'


 router.post('/',  validatorRegister.validator, registerController.register)

 

//router.get('/register', LoginController.register);
//router.post('/register', LoginController.storeUser);

module.exports = router;