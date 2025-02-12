const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    name: { type: String, required: true },
    address: String,
    phoneNumber: String,
    jobStatus: String
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);
