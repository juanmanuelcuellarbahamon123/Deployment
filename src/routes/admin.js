const router = require('express').Router()
const adminController = require('../controllers/adminController');

router.get('/admin', usuarioController.vistaAdmin);

module.exports = router;