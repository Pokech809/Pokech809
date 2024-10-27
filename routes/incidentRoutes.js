const express = require('express');
const router = express.Router();
const IncidentReport = require('../models/IncidentReport');

// Route to report a new incident
router.post('/report', async (req, res) => {
  const { reported_by, description, location } = req.body;
  try {
    const incident = new IncidentReport({ reported_by, description, location });
    await incident.save();
    res.status(201).json({ message: 'Incident reported successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error reporting incident' });
  }
});

// Route to get all incidents
router.get('/', async (req, res) => {
  try {
    const incidents = await IncidentReport.find();
    res.status(200).json(incidents);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching incidents' });
  }
});

module.exports = router;
