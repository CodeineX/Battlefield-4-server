const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // (Optional)

// Replace with your MongoDB connection string (from MongoDB Atlas)
const mongoURI = 'mongodb+srv://ayushramteke2201:yE1d5iy5lBjXTQ54@cluster0.dk5psq1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const app = express();
const port = process.env.PORT || 5000; // Use environment variable or default port

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// (Optional) Enable CORS if needed for your React app
app.use(cors());

// Define the session data schema
const sessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  numPlayers: { type: Number, required: true },
  ping: { type: Number, required: true },
  tickrate: { type: Number, required: true },


  settingsLabel: { type: Array, required: true },

  advancedLabel: { type: Array, required: true },

  rulesLabel: { type: Array, required: true },
});

const Session = mongoose.model('Session', sessionSchema);

// API endpoint to create a new session
app.post('/api/sessions', async (req, res) => {
  const { sessionId, numPlayers, ping, tickrate, settingsLabel, advancedLabel, rulesLabel } = req.body;
  try {
    const newSession = new Session({ sessionId, numPlayers, ping, tickrate, settingsLabel, advancedLabel, rulesLabel });
    await newSession.save();
    res.json({ message: 'Session created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating session' });
  }
});

// API endpoint to retrieve a session by ID
app.get('/api/sessions/:sessionId', async (req, res) => {
  const sessionId = req.params.sessionId;
  try {
    const session = await Session.findById(sessionId);
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }
    res.json(session);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving session' });
  }
});

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
