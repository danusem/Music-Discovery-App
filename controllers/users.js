const User = require('../models/user');

function newUser(req, res) {
    res.render('users/new');
}

function create(req, res) {
const user = new User(req.body);

user.save(function(err) {
    if(err) return res.render('users/new');
    res.redirect('/users');
});

}

module.exports = {
    new: newUser,
    create
}

