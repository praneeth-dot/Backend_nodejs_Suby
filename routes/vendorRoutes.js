const vendorController = require('../controllers/vendorController');
const express = require('express');

const router = express.Router();

router.post('/register', vendorController.vendorRegister);
router.post('/login', vendorController.vendorLogin);

router.get('/all-vendor', vendorController.getAllvendors);
router.get('/single-vendor/:id', vendorController.getVendorById);


module.exports = router;