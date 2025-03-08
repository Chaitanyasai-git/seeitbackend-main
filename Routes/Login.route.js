const express = require('express');
const router = express.Router();
const User = require('../Models/Login.model');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const user = new User({
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({
            status: 201,
            message: 'User created successfully',
            data: {
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
