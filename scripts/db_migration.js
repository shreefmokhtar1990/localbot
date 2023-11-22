// Import the necessary libraries
const mongoose = require('mongoose');
const config = require('../config/config');
const Conversation = require('../src/models/schema');

// Connect to the MongoDB database
mongoose.connect(config.mongoDbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

// Define a function to initialize the database
async function initializeDatabase() {
  // Drop the existing conversations collection if it exists
  await mongoose.connection.db.dropCollection('conversations', function(err, result) {
    if (err) {
      console.log('Error in dropping collection:', err);
    } else {
      console.log('Dropped collection:', result);
    }
  });

  // Create a new conversations collection
  const ConversationCollection = mongoose.model('Conversation', Conversation);

  // Add some initial data if necessary
  // const conversation = new ConversationCollection({ userMessage: 'Hello', botResponse: 'Hi', timestamp: new Date() });
  // await conversation.save();
}

// Call the initializeDatabase function
initializeDatabase()
  .then(() => console.log('Database initialization complete'))
  .catch((error) => console.error('Error during database initialization:', error))
  .finally(() => mongoose.connection.close());

