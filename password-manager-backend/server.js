const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/password', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Password Schema
const passwordSchema = new mongoose.Schema({
  siteName: String,
  username: String,
  password: String
});

const Password = mongoose.model('Password', passwordSchema);

// POST route to add a password
app.post('/addPassword', async (req, res) => {
  const { siteName, username, password } = req.body;

  const newPassword = new Password({
    siteName,
    username,
    password
  });

  try {
    const savedPassword = await newPassword.save();
    res.status(201).json(savedPassword);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save password' });
  }
});

// GET route to retrieve all passwords
app.get('/getPasswords', async (req, res) => {
  try {
    const passwords = await Password.find({});
    res.json(passwords);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve passwords' });
  }
});

// DELETE route to delete a password by ID
app.delete('/deletePassword/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await Password.findByIdAndDelete(id); // Use the correct model name
    res.status(200).send('Password deleted');
  } catch (error) {
    res.status(500).send('Error deleting password');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
