require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const router = new express.Router();
const mongoose = require('../conn/db');
const User = require('../models/user')
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const sendEmail =require('../utils/sendEmail')
const jwt = require('jsonwebtoken');
router.use(cookieParser());

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: "User already exists" });
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const verificationToken = crypto.randomBytes(32).toString('hex');
        user = new User({
            name,
            email,
            password: hashedPassword,
            verificationToken,
        });
        await user.save();
        const verificationLink = `${process.env.BASE_URL}/auth/verify/${verificationToken}`;
        await sendEmail(email, "Verify your Email", `Click on this link to verify your email: ${verificationLink}`);
        res.status(200).json({ msg: "Signup successful! Please check your email to verify your account." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/verify/:token', async (req, res) => {
    try {
        const user = await User.findOne({ verificationToken: req.params.token });
        if (!user) return res.status(400).json({ msg: "Invalid or expired token" });
        user.isVerified = true;
        user.verificationToken = null;
        await user.save();
        res.status(200).json({ msg: "Email verified successfully! You can now log in." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/login' , async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(401).json({message:"Something went wronge"});
        if(!user.isVerified) return res.status(401).json({message:"Check Your Email Address To Verify"});
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.cookie('token',token)
        res.status(200).json({ token });   
    } catch(error){
        console.log(error)
    }
})

module.exports = router;