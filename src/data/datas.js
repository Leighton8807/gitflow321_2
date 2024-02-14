const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
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
        const query = "INSERT INTO Users (id, name_user, name, email, password) VALUES (?, ?, ?, ?, ?)";
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


const addImage = (req, res) => {
    const { nombre, description ,image } = req.body;
  
    // Insertar en la base de datos
    const sql = 'INSERT INTO Images (tittle, description , image) VALUES (?, ?, ?)';
    connection.query(sql, [nombre, description ,image], (error, results) => {
      if (error) throw error;
      res.json({ mensaje: 'Correcto al subir datos' });
    });
  };



module.exports = {
    userData,
    addImage
}
