const bcrypt = require('bcryptjs');

const signingKey = require('../config/keys');
const generateToken = require ('../helpers/generator-token')

let auth = (req, res )=>{
    let email = req.body.email;
    let password = req.body.password;
    let rol = req.body.rol;
    console.log("Email", email);
    console.log("Password",password);

    let token = generateToken(
        {email: email, rol, rol},
        signingKey.SIGNING_KEY_TOKEN,
        new Date().getTime() + (100 * 60 * 1000)
    );

    let cookieConfig = {
        domain: 'localhost',
        path: '/refresh',
        secure: false,
        expires: new Date(Date.now() + 300000),
        httpOnly: true,
        signed: true
      };
      
  return res.status(200).cookie('refresh_token', email, cookieConfig)
  .json({
    status: 'Successful authentication', token: token
  });
}

module.exports = {

    auth
} 