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
        correo: req.body.email,
        password: req.body.password,
        id_rol: 2
    }
    let sql = "INSERT INTO usuarios SET ?";
    await mysql.query(sql, newUser, (err) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.redirect('/');
        }
    });
}

exports.ingresarUsuario = async (req,res) => {
    let user = {
        correo: req.body.email,
        password: req.body.password
    }
    let sql = "SELECT id_rol FROM usuarios WHERE correo = ? AND password = ?";
    await mysql.query(sql, [user.correo, user.password], (err, resultado) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            console.log(resultado);
        }
    });
} 