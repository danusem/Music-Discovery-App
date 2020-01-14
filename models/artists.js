const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistsSchema = new Schema ({
    name: {type: String, required: true, unique: true},
    genre: String,
    yearsActive: Number,
    favorite: Boolean
});

module.exports = mongoose.model('Artist', artistsSchema);