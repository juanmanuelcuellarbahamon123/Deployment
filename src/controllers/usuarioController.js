const mysql = require('../database');

exports.vistaUsuario = (req,res) => {
    res.render('usuario/index');
}