// src/routes/sortRoutes.js
const express = require('express');
const { sortArray } = require('../controllers/sortController');
const validatePayload = require('../middlewares/validatePayload');
const router = express.Router();

router.post('/sort', sortArray);

module.exports = router;
