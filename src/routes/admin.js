const router = require('express').Router()
const adminController = require('../controllers/adminController');

router.get('/admin', adminController.vistaAdmin);

module.exports = router;