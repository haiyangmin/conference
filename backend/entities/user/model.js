const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    date: { type: Date, default: Date.now },
    username: String,
    email: String,
    role: { type: String, default: 'user' },
});

module.exports = mongoose.model('user', userSchema);
