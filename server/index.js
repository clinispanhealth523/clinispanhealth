// server/index.js
// server/index.js
const path = require('path');
const express = require('express');

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../clinispanhealth-app/build')));

// Handle GET requests to /api route
app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('/app', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../clinispanhealth-app/build', 'index.html'));
});