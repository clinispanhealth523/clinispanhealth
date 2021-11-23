// server/index.js
import path from 'path'
import express from 'express';
import { createPatient } from './db.js';
const app = express();


const PORT = process.env.PORT || 3001;


// Have Node serve the files for our built React app
app.use(express.static(path.resolve('./clinispanhealth-app/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve('./clinispanhealth-app/build'), 'index.html');
});

//Handle POST request from Sign Up page

app.post("/manage-profile", (req, res) => {
  console.log("Submitting to manage profile...");
  console.log(req.body);
});

app.post("/signUp", (req, res) => {
    console.log(req.body);
  /*  
     createPatient(req.body).catch(
       function(err) {
         throw err;
       }
     );
       */
});

app.post("/login", (req, red) => {
  console.log(req.body);
  // const user = getPatient(req.body.email);
})


// Handle axios posts.
// Perform server sides checks and use the database functions.



// The app listens to the PORT
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


