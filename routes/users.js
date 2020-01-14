const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

// router.get('/:id', usersCtrl.show);

router.get('/', usersCtrl.index);

module.exports = router;

