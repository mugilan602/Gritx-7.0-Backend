const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    secId: { type: String, required: true },
    registrationNumber: { type: String, required: true },
    dept: { type: String, required: true },
    section: { type: String, required: true },
    year: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;
