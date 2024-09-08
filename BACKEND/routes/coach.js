// backend/routes/coach.js
const express = require('express');
const router = express.Router();
const Coach = require('../models/Coach');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');


router.get('/coach-only', authenticate, authorize(['coach']), (req, res) => {
    res.json({ message: 'Welcome, Coach!' });
});

// Register Coach Endpoint
// router.post('/register', async (req, res) => {
//     try {
//         const { firstName, lastName, username, email, password, specialization, experience } = req.body;

//         const coachExists = await Coach.findOne({ email });
//         if (coachExists) {
//             return res.status(400).json({ error: 'Coach already exists' });
//         }

//         const newCoach = new Coach({
//             firstName,
//             lastName,
//             username,
//             email,
//             password,
//             specialization,
//             experience
//         });

//         await newCoach.save();

//         const token = jwt.sign({ id: newCoach._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         res.status(201).json({ token, message: 'Registration successful' });
//     } catch (err) {
//         console.error('Error registering coach:', err.message);
//         res.status(500).json({ error: 'Error registering coach' });
//     }
// });

// Register Coach Endpoint
router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, username, email, password, specialization, experience, role } = req.body;

        const coachExists = await Coach.findOne({ email });
        if (coachExists) {
            return res.status(400).json({ error: 'Coach already exists' });
        }

        // Hash the password before creating a new coach
        const hashedPassword = await bcrypt.hash(password, 10);

        const newCoach = new Coach({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword, // Use the hashed password
            specialization,
            experience,
            role: 'coach' // Store the role as 'coach'
        });

        await newCoach.save();

        const token = jwt.sign({ id: newCoach._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token, message: 'Registration successful' });
    } catch (err) {
        console.error('Error registering coach:', err.message);
        res.status(500).json({ error: 'Error registering coach' });
    }
});

// Login Coach Endpoint
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const coach = await Coach.findOne({ email });

        if (coach && await bcrypt.compare(password, coach.password)) {
            // Create a JWT token including id and role (assuming the Coach model has a role field)
            const token = jwt.sign({ id: coach._id, role: coach.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

            // Respond with token, id, and role
            res.status(200).json({
                token,
                id: coach._id,
                role: coach.role, 
                message: 'Login successful'
            });
        } else {
            res.status(400).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        console.error('Error logging in coach:', err.message);
        res.status(500).json({ error: 'Error logging in coach' });
    }
});

module.exports = router;

