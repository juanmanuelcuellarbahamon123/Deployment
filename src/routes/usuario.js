const router = require('express').Router()
const usuarioController = require('../controllers/usuarioController');

router.get('/usuario', usuarioController.vistaUsuario);
//router.get('/menu', usuarioController.menu);
//router.get('/pedido', usuarioController.pedido);

module.exports = router;