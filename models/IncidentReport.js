const mongoose = require('mongoose');
const IncidentReport = require('../models/IncidentReport');


const incidentReportSchema = new mongoose.Schema({
  reported_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  status: { type: String, enum: ['pending', 'resolved'], default: 'pending' }
});

module.exports = mongoose.model('IncidentReport', incidentReportSchema);
