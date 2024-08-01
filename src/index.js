// src/index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const sortRoutes = require('./routes/sortRoutes');
app.use('/api', sortRoutes);

// Middleware to handle 404 Not Found
app.use((req, res, next) => {
    res.status(501).json({ code: 501 ,error: 'Route not found' });
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
