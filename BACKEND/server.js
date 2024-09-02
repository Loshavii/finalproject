// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const coachRoutes = require('./routes/coach'); // Import coach routes
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Database connection error:', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/coaches', coachRoutes); // Use coach routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
