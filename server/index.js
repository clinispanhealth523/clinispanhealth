// server/index.js
import path from 'path';
import express from 'express';
//import { createPatient } from './db.js';

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
//app.use(express.static(path.resolve(__dirname, '../clinispanhealth-app/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../clinispanhealth-app/build', 'index.html'));
});


app.post("/signUp", (req, res) => {
    console.log(req.body);
});


//Handle POST requests


// Handle axios posts.
// Perform server sides checks and use the database functions.

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


