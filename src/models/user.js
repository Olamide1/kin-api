var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: Number,
    fullname: String,
    email: String,
    password: String,
    gender: Boolean,
    birthday: Date,
    occupation: String
});

module.exports = mongoose.model('User', userSchema);