const bcrypt = require('bcryptjs');

let registerUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;
    let lastName = req.body.last_name;
    let id = req.body.id;
    
    console.log(email, password, name, lastName, id);
}

function register(req, res){

    if (req.session.loggedin != true) {
        
        res.render('login/register');
    }else{
        res.redirect('/')
    }
}

module.exports = {
    registerUser,
    register
}