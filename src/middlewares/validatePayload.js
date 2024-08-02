// src/middlewares/validatePayload.js
const { sortSchema } = require('../schemas/sortSchema');

const validatePayload = (req, res, next) => {
    const { error } = sortSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ code: 400 , message: error.details[0].message });
    }
    next();
};

module.exports = validatePayload;
