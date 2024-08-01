// src/schemas/sortSchema.js
const Joi = require('joi');

const sortSchema = Joi.object({
    array: Joi.array().items(Joi.number()).required()
});

module.exports = { sortSchema };
