const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const participantRoutes = require('./Routes/participants');

const app = express();

app.use(express.json());
app.use(cors());

const dbURI = 'mongodb://localhost:27017/';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

app.use('/api/participant', participantRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
