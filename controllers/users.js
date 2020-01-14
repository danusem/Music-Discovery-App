const User = require('../models/user');

function index(req, res) {
    User.find({}, function(err, users) {
        console.log(req.user)
        res.render('users/index', {
            users, 
            user: req.user
        });
    });
}

module.exports = {
    index
};