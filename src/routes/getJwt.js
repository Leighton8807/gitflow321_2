const express = require('express');
const authController = require('../controllers/auth-controller');
const validatorAuth = require('../middleware/auth-validator');
const router = express.Router();

// Ruta para autenticar un usuario y validar los parámetros de la solicitud.
router.post('/', validatorAuth.validatorParams, validatorAuth.validator, authController.auth);


module.exports = router; 