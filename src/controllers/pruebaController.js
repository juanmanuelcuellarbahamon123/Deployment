const mysql = require('../database');

exports.prueba = (req,res) => {

    const consulta = mysql.query("SELECT * FROM personas");

    let data = {
        personas: consulta
    }

    res.render('home/index', data);
}