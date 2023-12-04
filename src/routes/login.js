 const express = require('express');
 const LoginController = require('../controllers/login-controller');
// const loginController = require('../controllers/login-controller');
// const validatorLogin = require('../middleware/login-validator');
 const router = express.Router();

// router.get('/login', (req, res)=>{
// res.send('ACA VA EL INICIO DE SESION');
// });

router.get('/login', LoginController.login);
router.post('/login', LoginController.auth);
router.get('/register', LoginController.register);
router.post('/register', LoginController.storeUser);
router.get('/logout', LoginController.logout);

module.exports = router;



