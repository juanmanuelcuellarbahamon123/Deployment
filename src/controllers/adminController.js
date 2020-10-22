const mysql = require('../database');

exports.vistaAdmin = (req,res) => {
    res.render('admin/index');
}