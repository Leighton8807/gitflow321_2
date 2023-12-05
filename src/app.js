const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const myconnection = require('express-myconnection');

const register = require('./routes/register');
const login = require('./routes/login');

const app = express()
    .use(bodyParser.json())
    .use(cookieParser())
    .use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }))
    
    

let port = 4000;

app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
    extname:'.hbs',
}));

app.set('view engine', 'hbs');


app.use('/register', register);
app.use('/', login)




app.listen(port, ()=>{
    console.log(`Express server listening on port ${port} `);
});


app.get('/', (req, res) => {

    if (req.session.loggedin == true) {
        
        res.render('home', {name: req.session.name});

    }else{
        res.redirect('/login');
    }
    
});