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
exports.iniciar = (req,res)=>{

    console.log('hi');
    res.status(200).json({ msg: 'Ya funciono la api' });
}