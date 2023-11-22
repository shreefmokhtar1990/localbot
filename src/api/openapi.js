// Import the necessary libraries
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

// Import the bot functions
const bot = require('../bot/chatgpt');

// Create an Express router
const router = express.Router();

// Load the OpenAPI specification
const openapiSpecification = YAML.load(path.join(__dirname, '../../docs/openapi.yaml'));

// Serve the OpenAPI specification and Swagger UI
router.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

// Define an endpoint for interacting with the bot
router.post('/bot', async (req, res) => {
  try {
    // Get the message from the request body
    const { message } = req.body;

    // Send the message to the bot and get the response
    const botResponse = await bot.sendMessageToBot(message);

    // Send the bot's response
    res.json({ response: botResponse });
  } catch (error) {
    console.error('Error interacting with bot:', error);
    res.status(500).json({ error: 'An error occurred while interacting with the bot.' });
  }
});

// TODO: Define additional endpoints for file interaction as per the project description

// Export the router
module.exports = router;

