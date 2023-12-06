const express = require('express');
const router = express.Router();

const deleteCompany = require('../controllers/delete-controller.js')


router.delete('/delete/:id', deleteCompany)

module.exports = router;