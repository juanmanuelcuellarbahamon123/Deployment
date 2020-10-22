const mysql = require('../database');

exports.index = (req,res) => {
    res.render('auth/login');
}

exports.formRegistro = (req,res) => {
    res.render('auth/registro');
}

exports.registrarUsuario = async (req,res) => {
    let newUser = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
        id_rol: 2
    }
    await mysql.query("INSERT INTO usuarios SET ?", [newUser])
        .catch(err => {
            console.log(error);
        });
    res.redirect('/');
}