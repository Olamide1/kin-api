var boom = require('boom');
var User = require('../models/user');

exports.searchUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        return user;
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.signUp = async (req, res) => {
    try {
        const user = await User.create({
            email: req.body.email, fullname: req.body.fullname,
            password: req.body.password
        });
        return user;
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.signIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password });
        return user;
    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.updateProfile = async (req, res) => {
    try {
        const id = req.body.id;
        const update = await User.findByIdAndUpdate(id,
            { gender: req.body.gender, age: req.body.age, occupation: req.body.occupation }, { new: true });
        return update;
    } catch (err) {
        throw boom.boomify(err);
    }
}