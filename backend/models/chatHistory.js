const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  userId: String,
  mentorType: String,
  messages: [
    {
      role: String, // "user" or "mentor"
      content: String,
      timestamp: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('Chat', chatSchema);
