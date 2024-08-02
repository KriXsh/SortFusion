// src/routes/sortRoutes.js
const express = require('express');
const { sortArray } = require('../controllers/sortController');
const validatePayload = require('../middlewares/validatePayload');
const router = express.Router();

router.post('/sort',validatePayload, sortArray);

module.exports = router;
