// app.js
const express = require("express"); // Import the Express framework
const app = express(); // Create an Express application instance

// Define a simple route that responds with a greeting message
app.get("/", (req, res) => {
  res.send(`Hello, GitHub Actions!`);
});
module.exports = app; // Export the app for use in other modules
