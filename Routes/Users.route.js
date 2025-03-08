const express = require('express');
const router = express.Router();
const User = require('../Models/Login.model');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json({
            status: 200,
            message: 'Users fetched successfully',
            data: users
        })
        if (!users) {
            return res.status(404).json({
                status: 404,
                message: 'No users found'
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
