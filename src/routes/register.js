const express = require('express');
const registerController = require('../controllers/register-controller');
const validatorRegister = require('../middleware/register-validator');
const router = express.Router();


 router.post('/register', validatorRegister.validatorParams, validatorRegister.validator, registerController.registerUser, (res, req)=>{
     res.send('register ok')
 });
router.get('/register', LoginController.register);
router.post('/register', LoginController.storeUser);

module.exports = router;