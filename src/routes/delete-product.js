const express = require('express');
const router = express.Router();

router.delete('/delete', (req, res) =>{
    res.send('<h1>borrado </h1/')
})

module.exports = router;