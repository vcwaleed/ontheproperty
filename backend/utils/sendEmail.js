require('dotenv').config();
const nodemailer = require('nodemailer');
const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, 
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });
        
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: subject,
            text: text,
        });
        console.log("Email sent successfully");
    } catch (error) {
        console.log("Error sending email", error);
    }
};
module.exports = sendEmail;
