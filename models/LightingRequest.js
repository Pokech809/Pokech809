const mongoose = require('mongoose');

const lightingRequestSchema = new mongoose.Schema({
  reported_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  location: {
    street_name: { type: String },
    stall_number: { type: String }
  },
  status: { type: String, enum: ['open', 'in-progress', 'completed'], default: 'open' }
});

module.exports = mongoose.model('LightingRequest', lightingRequestSchema);
