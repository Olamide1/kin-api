var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    gender: String,
    age: Number,
    occupation: String
});

module.exports = mongoose.model('User', userSchema);