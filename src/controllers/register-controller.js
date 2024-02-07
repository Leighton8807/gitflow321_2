const bcrypt = require('bcryptjs');
const clienData = require('../data/clientData');

let register = (req, res) => {
    const {id,name,email,password} = req.body
    let valid = clienData.addClient(id,name,email,password);
    if(!valid){
        return res.status(201).send(
            {status: 'Register Completed'}
        ); 
    }else{
        return res.status(404).send(
            {status: 'Bad register'}
        )
    }
}   


module.exports = {register}