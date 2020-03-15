const mongoose = require('mongoose');

const conferenceSchema = mongoose.Schema({
    date: { type: Date, default: Date.now },
    name: { type: String, uppercase: true, trim: true },
    startTime: { type: String, trim: true },
    endTime: { type: String, trim: true },
    address: { type: String, trim: true },
    city: { type: String, trim: true },
    roomName: { type: String, trim: true },
    content: Object,
    keywords: [],
    conference_slug: { type: String, trim: true },
    roomAvailability: {type: Number ,default: 150},
    participants: [],
});

module.exports = mongoose.model('conference', conferenceSchema);
