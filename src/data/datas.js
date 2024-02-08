const mysql = require('mysql2');
const registered = require('../models/registered');


const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1091205488Kg',
    database: 'GruappDta'
})
database.connect();



class userData {
    static addClient(id, name_user, name, email, password) {
        const query = "INSERT INTO Clients (id, name_user, name, email, password) VALUES (?, ?, ?, ?, ?)";
        return new Promise((resolve, reject) => {
            database.query(query, [id, name_user, name, email, password], (err, result) => {
                if (err) {
                    console.error("Error registered " + err.message);
                    reject(err);
                } else {
                    console.log(" registered successfully");
                    resolve(true);
                }
            });
        });
    }
}




module.exports = {
    userData
}
