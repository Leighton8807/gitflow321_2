const express = require('express');
const registerController = require('../controllers/register-controller');
const validatorRegister = require('../middleware/register-validator');
const LoginController = require('../controllers/register-controller')
const storeUser = require('../controllers/login-controller')
const router = express.Router();


//router.post('/register', validatorRegister.validatorParams, validatorRegister.validator, registerController.registerUser)

router.get('/register', LoginController.register);
router.post('/register', validatorRegister.storeUser);

module.exports = router;