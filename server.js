const app = require("./app"); // Import the Express application instance
const PORT = process.env.PORT || 3000; // Define the port to listen on

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`); // Log a message when the server starts
});
