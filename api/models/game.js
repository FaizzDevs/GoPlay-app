const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    sport: { type: String, require: true },
    area: { type: String, require: true },
    date: { type: String, require: true },
    time: { type: String, require: true },
    admin: { type: String, require: true },
    totalPlayers: { type: Number, require: true },
    activityAccess: { type: String, default: "public" },
    players: [{ type: String }],
    queries: [{
        userId: { type: String },
        query: { type: String },
        timestamp: { type: Date },
    }],
    requests: [{
        userId: { type: String },
        comment: { type: String },
        status: { type: String, default: 'Pending' }
    }],
    isBooked: { type: Boolean, default: false },
    courtNumber: { type: String, default: Null },
    matchFull: { type: Boolean, default: false },
});

module.exports = mongoose.model('Game', gameSchema);