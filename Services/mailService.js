// services/mailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mugilan7778@gmail.com',
        pass: 'qphx dotg cdru rxzu',
    },
});

const sendMail = async (to, subject, text) => {
    const mailOptions = {
        from: 'mugilan7778@gmail.com', // Sender address
        to,
        subject,
        text
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error; // Propagate error for handling in the calling function
    }
};

module.exports = { sendMail };
