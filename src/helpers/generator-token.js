const nJwt = require('njwt');


let generateToken = (properties, key, expiration, delay=0) => {
    let jwt = nJwt.create(properties, key);
    jwt.setExpiration(expiration);
    jwt.setNotBefore(delay);
    return jwt.compact();
}


module.exports = generateToken;