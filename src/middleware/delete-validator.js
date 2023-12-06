const companies = require('../models/companies')
const  deleteValidator = (req, res) => {
    const id = Number(req.params.id);
    companies = companies.filter(company => company.id != id);
    res.status(204).end();
    
}

module.exports = deleteValidator;