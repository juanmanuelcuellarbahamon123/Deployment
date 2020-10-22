const router = require('express').Router()
const pruebaController = require('../controllers/pruebaController');

router.get('/', pruebaController.prueba);

module.exports = router;