const express = require('express');
const LoginController = require('../controllers/login-controller');
const validatorLogin = require('../middleware/register-validator');
const router = express.Router();

router.get('/login', LoginController.login);
router.post('/login', LoginController.auth);
//router.get('/register', LoginController.register);
//router.post('/register', LoginController.storeUser);
router.get('/logout', LoginController.logout);

module.exports = router;



