const Artist = require('../models/artists');
const User = require('../models/user');

function newArtist(req, res) {
    Artist.find({}, function(err, artists) {
        res.render('artists/new', {
            title: 'Add Artist',
            user: req.user,
            artists
        });
    });
}

function create(req, res) {
    Artist.create(req.body, function (err, artist) {
        User.findById(req.user._id, function(err, user){
            user.artist.push(artist._id);
            user.save(function (err){
                console.log(err)
            res.redirect('/');
        });
        })
        
        
    });
}

module.exports = {
    new: newArtist, 
    create
};