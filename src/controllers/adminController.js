const mysql = require('../database');

exports.vistaAdmin = (req,res) => {
    res.render('admin/index');
}

exports.usuarios = (req,res) => {

    let sql = "SELECT * FROM usuarios";
    await mysql.query(sql, newUser, (err, resultado) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            console.log(resultado);
            res.render('admin/usuarios')
        }
    });
}

exports.productos = (req,res) => {
    res.render('admin/productos');
}

