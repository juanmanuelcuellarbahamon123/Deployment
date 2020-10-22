const router = require('express').Router()
const authController = require('../controllers/authController');

router.get('/', authController.index);
router.post('/registro', authController.registrarUsuario);

module.exports = router;