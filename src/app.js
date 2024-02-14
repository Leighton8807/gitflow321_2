const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const signingKey = require('./config/keys');
const validateToken = require('./routes/GetAuthentication');
const auth = require('../src/routes/getJwt');
const register = require('./routes/register');
const images = require('./routes/images')



const app = express()
    .use(bodyParser.json())
    .use(cookieParser(signingKey.SIGNING_KEY_COOKIE));

    

let port = 4000;


app.use('/register', register);
app.use('/auth', auth);
app.use('/readToken', validateToken);
app.use('/addImg', images);




app.listen(port, ()=>{
    console.log(`Express server listening on port ${port} `);
});



