const express = require('express');

const imagenController = require('../data/datas');

const router = express.Router();

router.post('/', imagenController.addImage);

module.exports = router;