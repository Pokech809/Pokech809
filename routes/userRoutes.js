const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to create a new user (e.g., signup)
router.post('/signup', async (req, res) => {
  const { name, phone, password, role } = req.body;
  try {
    const user = new User({ name, phone, password, role });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Route to log in a user
router.post('/login', async (req, res) => {
  const { phone, password } = req.body;
  try {
    const user = await User.findOne({ phone });
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Here, add password validation logic
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

module.exports = router;
