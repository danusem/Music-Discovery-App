const router = require('express').Router();
const passport = require('passport');
const User = require('../models/user');

router.get('/', function (req, res) {
    if (req.user) {
        User.findById(req.user._id).populate('artist').exec(function(err, user){
            res.render('index', {
                user
            })
        })
    } else {
        res.render('index', {
            user: req.user
        });
    }
    
});

router.get('/auth/google', passport.authenticate(
    'google', 
    { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
    'google',
  {
     successRedirect: '/',
     failureRedirect: '/'
  }  
));

router.get('/logout', function(req, res) {
    req.logOut();
    res.redirect('/');
});

module.exports = router;