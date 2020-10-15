const mysql = require('../database');

exports.prueba = async (req,res) => {

    /*
    const consulta = await mysql.query("SELECT * FROM personas");

    console.log(consulta);

    let data = {
        personas: consulta
    }
    */

    res.render('home/index');
}