const mysql = require('../database');

exports.vistaAdmin = (req,res) => {
    res.render('admin/index');
}

exports.usuarios = (req,res) => {
    res.render('admin/usuarios');
}

exports.productos = (req,res) => {
    res.render('admin/productos');
}

