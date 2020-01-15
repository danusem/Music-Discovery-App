const express = require('express');
const router = express.Router();
const artistsCtrl = require('../controllers/artists');

router.get('/artists/new', isAuthenticated, artistsCtrl.new);
router.post('/artists', artistsCtrl.create);
router.get('/artists/:id', artistsCtrl.show);
router.post('/artists/:id/albums', isAuthenticated, artistsCtrl.createAlbum);

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) return next()
    res.redirect('/')
}

module.exports = router;