const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Gakoromone Security App Backend');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// Import routes
const userRoutes = require('./routes/userRoutes');
const incidentRoutes = require('./routes/incidentRoutes');
const lightingRoutes = require('./routes/lightingRoutes');

// Initialize Express app
app.use(express.json());
app.use(cors());

//Database connection
mongoose.connect('mongodb://localhost:27017/security')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// Register routes
app.use('/api/users', userRoutes);
app.use('/api/incidents', incidentRoutes);
app.use('/api/lighting', lightingRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.use(express.json());
app.get('/', (req, res) => {
  res.send('Security App Backend');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
