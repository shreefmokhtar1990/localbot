const mongoose = require('mongoose');

// Define the schema for a conversation
const ConversationSchema = new mongoose.Schema({
  userMessage: {
    type: String,
    required: true,
  },
  botResponse: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Export the Conversation model
module.exports = mongoose.model('Conversation', ConversationSchema);
