const mysql = require('mysql2');
const Client = require('../models/client');

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1091205488Kg',
    database: 'GruappDta'
})
database.connect();

/*
class clientData {
    static addClient(id, name, email, password) {
        const query =
        "INSERT INTO Clients (id,name,email,password) VALUES (? , ?, ?, ?)";
        database.query(query,[id,name,email,password], (err, result)=> {
            if (!err) {
                console.error("Error register Client" + err.message);
                return false;
            }else{
                console.log("Client registered succesfully");
                return true;
            };
        })
    }
}

*/

class clientData {
    static addClient(id, name, email, password) {
        const query = "INSERT INTO Clients (id, name, email, password) VALUES (?, ?, ?, ?)";
        return new Promise((resolve, reject) => {
            database.query(query, [id, name, email, password], (err, result) => {
                if (err) {
                    console.error("Error registering Client: " + err.message);
                    reject(err);
                } else {
                    console.log("Client registered successfully");
                    resolve(true);
                }
            });
        });
    }
}

module.exports = clientData