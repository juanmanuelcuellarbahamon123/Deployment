const mysql = require('../database');

exports.prueba = async (req,res) => {
    res.render('home/index');
}
exports.iniciar = (req,res)=>{
    console.log('hi');
    res.status(200).json({ msg: 'Ya funciono la api' });
}