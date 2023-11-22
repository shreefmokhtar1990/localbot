// Import the dotenv library
const dotenv = require('dotenv');

// Load the environment variables from the .env file
dotenv.config();

// Define the configuration settings
const config = {
  // The OpenAI API key
  openaiApiKey: process.env.OPENAI_API_KEY,

  // The path to the application folder
  appFolderPath: process.env.APP_FOLDER_PATH,

  // The environment (development or production)
  environment: process.env.NODE_ENV || 'development',

  // The port the server should listen on
  port: process.env.PORT || 3000,

  // The MongoDB connection string
  mongoDbConnectionString: process.env.MONGODB_CONNECTION_STRING,
};

// Export the configuration settings
module.exports = config;

