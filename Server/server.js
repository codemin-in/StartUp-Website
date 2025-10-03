

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); 
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 3000; 


app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: 'POST,OPTIONS'
}));


const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, 
    },
});


app.post('/api/send-email', async (req, res) => {
    const { user_name, user_email, subject, message } = req.body;

    
    if (!user_name || !user_email || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'Missing required fields: Name, Email, and Message.' 
        });
    }

    try {
        
        const mailOptions = {
            from: process.env.SMTP_USER, 
            to: 'codemin.in@gmail.com', 
            replyTo: user_email,
            subject: `New Quote Request: ${subject || 'No Subject'}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
                    <h2 style="color: #1D4ED8;">New Message from Contact Form</h2>
                    <p><strong>Name:</strong> ${user_name}</p>
                    <p><strong>Email:</strong> ${user_email}</p>
                    <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
                    <p><strong>Message Details:</strong></p>
                    <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 10px; border-radius: 5px;">${message}</p>
                </div>
            `,
        };

        
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: %s', info.messageId);

       
        res.status(200).json({ 
            success: true, 
            message: 'Email sent successfully!' 
        });

    } catch (error) {
        console.error('Nodemailer Error:', error);
        
        res.status(500).json({ 
            success: false, 
            message: 'Server failed to send email.', 
            details: error.message 
        });
    }
});


app.listen(PORT, () => {
    console.log(`Node.js server listening on port ${PORT}`);
});
