const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema ({
    content: String
});

const artistsSchema = new Schema ({
    name: {type: String, required: true, unique: true},
    genre: String,
    yearsActive: Number,
    favorite: Boolean,
    albums: [albumSchema]
});

module.exports = mongoose.model('Artist', artistsSchema);