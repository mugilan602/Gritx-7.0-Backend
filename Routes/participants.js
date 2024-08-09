const express = require('express');
const router = express.Router();
const { register } = require('../controller/participantController');

router.post("/", register);

module.exports = router;