// server/index.js
import path from 'path'
import express from 'express';
import bodyParser from 'body-parser';
import { getPatientById, createPatient, getPatient } from './db.js';
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// Test function for manage-profile submit
app.post("/manage-profile", (req, res) => {
  console.log("Submitting to manage profile...");
  console.log(req.body);
});

// Test function for login button submit

app.post("/login", (req, res) => {
  console.log(req.body)
  res.send({
    email: req.body.email,
    pw: req.body.pw,
    loggedIn: true
  })
});

// Retrieves entry values from the Sign Up page in JSON format and creates a new patient in the database; COMPLETE
app.post("/signUp", (req, res) => {
     createPatient(req.body).catch(
       function(err) {
         throw err;
       } 
     ); 
    res.send("POST request for signup completed.");
    
});

// Retrieves the patient with the specified user ID, and sends the patient back once the promise is completed
// Can be useful for patient-specific pages after the patient logs in
// COMPLETE


// Retrieves the patient with the specified email, and sends the patient data back once the promise is compeleted

app.get('/user/:email', (req, res) => {
  getPatient(req.params.email).then(function(patient) {
      res.send(patient)
      console.log(patient)
    }).catch(function(err) {
      console.log(err)
    }) 

});






// The app listens to the PORT
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


