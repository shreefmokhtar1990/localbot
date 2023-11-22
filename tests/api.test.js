// Import the necessary libraries
const request = require('supertest');
const express = require('express');
const router = require('../src/api/openapi');

// Create an Express application
const app = express();

// Use the router
app.use(router);

// Define the tests
describe('API Endpoints', () => {
  // Test the /bot endpoint
  it('should interact with the bot', async () => {
    const res = await request(app)
      .post('/bot')
      .send({ message: 'Hello, bot!' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('response');
  });

  // TODO: Add tests for the file interaction endpoints once they are defined

  // Test the /docs endpoint
  it('should serve the OpenAPI documentation', async () => {
    const res = await request(app)
      .get('/docs');

    expect(res.statusCode).toEqual(200);
  });
});

// Run the tests
afterAll(done => {
  // Close the server after the tests have run
  app.close();
  done();
});
