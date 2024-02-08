const bcrypt = require('bcryptjs');
const {userData} = require('../data/datas');


let register = (req, res) => {
    const {id,name_user,name,email,password} = req.body
    let valid = userData.addClient(id,name_user,name,email,password);
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


module.exports = {register};