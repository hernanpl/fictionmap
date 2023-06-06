// Import required modules
require('dotenv').config();
const express = require('express');
const jquery = require('jquery');
const mapboxgl = require('mapbox-gl');

const path = require('path');

// Create Express app
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Pass access token to client

app.get('/mapbox-access-token', (req, res) => {
  const mapboxAccessToken = process.env.MAPBOX_ACCESS_TOKEN;
  res.json({ accessToken: mapboxAccessToken });
});


// Start the server
const port = 3000; // Choose a suitable port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});