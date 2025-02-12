const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    isProfileSet: { type: Boolean, default: false },
    verificationToken: String,
});

module.exports = mongoose.model('User', UserSchema);
