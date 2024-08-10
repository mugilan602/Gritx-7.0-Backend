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
        from: 'mugilan7778@gmail.com',
        to,
        subject,
        text
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = { sendMail };
