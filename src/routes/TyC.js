const express = require('express');

const validator = require('../middleware/register-validator')
const router = express.Router();

router.get('/TyC',(res, req)=>{
    res.send('<h1> aca van los terminos y condiciones</h1>')
})


module.exports = router;