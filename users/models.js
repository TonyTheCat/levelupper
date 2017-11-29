// const mongoose = require('../db/mongoose');

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String },
    password: String
});

module.exports = mongoose.model('User', userSchema);