const express = require('express');

const router = express.Router();

const offersCtrl = require('../controllers/offer')

router.get('/', offersCtrl.get)
router.post('/', offersCtrl.post)
router.delete('/', offersCtrl.delete)


module.exports = router;