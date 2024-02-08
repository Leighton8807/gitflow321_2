const express = require('express');
const LoginController = require('../controllers/login-controller');
const validatorLogin = require('../middleware/register-validator');
const router = express.Router();

router.get('/logout', LoginController.logout);

module.exports = router;