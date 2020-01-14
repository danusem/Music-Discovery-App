const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: String,
    email: String,
    googleId: String,
    artist:[{type: Schema.Types.ObjectId, ref:'Artist'}]
},{
    timestamps: true
    
});

module.exports = mongoose.model('User', userSchema);