# Setup Instructions

This document provides a step-by-step guide on how to set up the ChatGPT Local Application on your local machine.

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (v6 or later)
- Docker (v20.10 or later)

## Steps

1. **Clone the repository**

   Open your terminal and run the following command:

   ```bash
   git clone https://github.com/yourusername/chatgpt-local-application.git
   ```

2. **Navigate to the project directory**

   Change your current directory to the project directory:

   ```bash
   cd chatgpt-local-application
   ```

3. **Install dependencies**

   Run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the root directory of the project. Refer to the `.env.example` file for the required environment variables. Fill in the variables with your own values.

5. **Build the Docker image**

   Run the following command to build the Docker image:

   ```bash
   docker-compose build
   ```

6. **Start the application**

   Run the following command to start the application:

   ```bash
   docker-compose up
   ```

The application should now be running on `http://localhost:3000`.

## Testing

To run the test cases, use the following command:

```bash
npm test
```

## Logs

Application logs can be found in the `logs/` directory.

## Troubleshooting

If you encounter any issues during the setup process, please refer to the `README.md` file or open an issue on the GitHub repository.
