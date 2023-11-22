// Define the API URL
const API_URL = '/api';

// Function to send a message to the bot
async function sendMessageToBot(message) {
  try {
    // Send a POST request to the bot endpoint
    const response = await fetch(`${API_URL}/bot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    // Parse the response as JSON
    const data = await response.json();

    // Return the bot's response
    return data.response;
  } catch (error) {
    console.error('Error sending message to bot:', error);
  }
}

// Function to handle the form submission
async function handleFormSubmit(event) {
  // Prevent the form from being submitted normally
  event.preventDefault();

  // Get the message from the form
  const message = event.target.elements.message.value;

  // Send the message to the bot
  const botResponse = await sendMessageToBot(message);

  // Display the bot's response
  document.getElementById('botResponse').textContent = botResponse;
}

// Add an event listener for the form submission
document.getElementById('messageForm').addEventListener('submit', handleFormSubmit);
