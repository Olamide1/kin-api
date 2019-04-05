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
function getNextSequenceValue() {
    var numbers = new Array(1000);
    for (var i = 0; i < numbers.length; i++) {
        return (i + 1);
    }
}

exports.signUp = async (req, res) => {
    var id = getNextSequenceValue();
    try {
        const user = await User.create({
            _id: id,
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