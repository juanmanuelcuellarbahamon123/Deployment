const mysql = require('../database');

exports.index = (req,res) => {
    res.render('auth/login');
}

exports.formRegistro = (req,res) => {
    res.render('auth/registro');
}

exports.registrarUsuario = async (req,res) => {
    await mysql.query("INSERT INTO usuarios(nombre, apellido, correo, password) SET = ?", req.body);
}