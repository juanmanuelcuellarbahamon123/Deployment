const router = require('express').Router()
const pruebaController = require('../controllers/pruebaController');

router.get('/', pruebaController.prueba);
router.get('/login',pruebaController.iniciar);

module.exports = router;