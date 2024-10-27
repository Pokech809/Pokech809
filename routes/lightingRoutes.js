const express = require('express');
const router = express.Router();
const LightingRequest = require('../models/LightingRequest');

// Route to create a new lighting request
router.post('/request', async (req, res) => {
  const { reported_by, description, location } = req.body;
  try {
    const request = new LightingRequest({ reported_by, description, location });
    await request.save();
    res.status(201).json({ message: 'Lighting request submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error submitting lighting request' });
  }
});

// Route to get all lighting requests
router.get('/', async (req, res) => {
  try {
    const requests = await LightingRequest.find();
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching lighting requests' });
  }
});

module.exports = router;
