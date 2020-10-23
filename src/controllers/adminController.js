const mysql = require('../database');

exports.vistaAdmin = (req,res) => {
    res.render('admin/index');
}

exports.usuarios = (req,res) => {

    let sql = "INSERT INTO usuarios SET ?";
    const usuarios = await mysql.query(sql, newUser, (err) => {
        if(err) {
            res.status(401).json({ err: err });
        } else {
            res.redirect('/');
        }
    });

    console.log(usuarios);

    res.render('admin/usuarios');
}

exports.productos = (req,res) => {
    res.render('admin/productos');
}

