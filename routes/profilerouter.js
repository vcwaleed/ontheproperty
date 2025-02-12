const express = require('express');
const router = new express.Router();
const authMiddleware =require('./middlewares/authMiddleware');
const Profile =require('../models/Profile');
const User =require('../models/user');

router.post('/profile', authMiddleware, async (req, res) => {
    try {
        const { name, address, phoneNumber, jobStatus } = req.body;
        const userId = req.user.id;
        let profile = await Profile.findOne({ userId });
        if (!profile) {
            profile = new Profile({ userId, name, address, phoneNumber, jobStatus });
        } else {
            profile.name = name || profile.name;
            profile.address = address || profile.address;
            profile.phoneNumber = phoneNumber || profile.phoneNumber;
            profile.jobStatus = jobStatus || profile.jobStatus;
        }
        await profile.save();
        await User.findByIdAndUpdate(userId, { isProfileSet: true });
        res.status(200).json({ message: "Profile updated successfully", profile });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
router.get('/profile', authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const profile = await Profile.findOne({ userId }).populate('userId', '-password');
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }
        res.status(200).json({ profile});
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});


module.exports = router;
