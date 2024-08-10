const Participant = require('../model/Participant');
const { sendMail } = require("../Services/mailService");

const register = async (req, res) => {
    try {
        const {
            name,
            secId,
            registrationNumber,
            dept,
            section,
            year,
            email,
            phoneNumber
        } = req.body;

        const newParticipant = new Participant({
            name,
            secId,
            registrationNumber,
            dept,
            section,
            year,
            email,
            phoneNumber
        });

        await newParticipant.save();

        await sendMail(
            email,
            'Registration Confirmation',
            `Dear ${name},\n\nYou have been successfully registered for the event.\n\nOur team will shortlist the final participants and inform everyone via WhatsApp.\n\nBest regards,\nEvent Team`
        );

        res.status(201).json({ message: 'Participant registered successfully and confirmation email sent!' });
    } catch (error) {
        console.error('Error registering participant:', error);
        res.status(500).json({ message: 'Error registering participant' });
    }
};

module.exports = { register };
