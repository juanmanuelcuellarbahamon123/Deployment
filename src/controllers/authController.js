const mysql = require('../database');

exports.index = (req,res) => {
    res.render('auth/login');
}

exports.registrarUsuario = async (req,res) => {
    await mysql.query("INSERT INTO usuarios(nombre, apellido, correo, password) SET = ?", req.body);
}