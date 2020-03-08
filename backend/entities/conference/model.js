const mongoose = require('mongoose');

const conferenceSchema = mongoose.Schema({
    date: { type: Date, default: Date.now },
    name: { type: String, uppercase: true, trim: true },
    startTime: { type: Date, default: Date.now },
    endTime: { type: Date, default: Date.now },
    address: { type: String, trim: true },
    roomName: { type: String, trim: true },
    roomAvailability: {type: Number ,default: 150},
    participants: [],
});

module.exports = mongoose.model('conference', conferenceSchema);
