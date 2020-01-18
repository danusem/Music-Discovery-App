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

function delArtist(req,res) {
    Artist.findByIdAndDelete(req.params.id, (err, artist) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Artist Deleted",
            id: artist._id
        };
        return res.redirect('/')
    });
}

function createAlbum(req, res) {
    Artist.findById(req.params.id, function (err, artist) {
        artist.albums.push(req.body)
        artist.save(function (err, artist) {
            res.redirect(`/artists/${artist._id}`)
        })
    });
}

function create(req, res) {
    req.body.favorite = !!req.body.favorite;
    Artist.create(req.body, function (err, artist) {
        console.log('artist', artist)
        User.findById(req.user._id, function(err, user){
            user.artist.push(artist._id);
            user.save(function (err){
                console.log(err)
            res.redirect('/');
        });
        })
        
        
    });
}

function show(req, res) {
    Artist.findById(req.params.id, function(err, artist) {
        console.log(artist)
        res.render('artists/show', { title: 'Artist Detail', artist, user:req.user });
    });
}


module.exports = {
    new: newArtist, 
    create,
    show,
    createAlbum,
    delArtist
};