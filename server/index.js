// server/index.js
import path from 'path'
import express from 'express';
import bodyParser from 'body-parser';
import { getPatient, updatePatient, deleteSchema, createSchema, createCondition } from './db.js';
import { login, signUp } from './signUp.js';
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
 // console.log(req.body.email);

  // Edits the current patient based on the patient's username; it is accessed by the 'email' field
  updatePatient(req.body).then(function() {
      getPatient(req.body.email).then(function(ans) {
        delete ans.password;
        delete ans.salt;
        console.log(ans);
        res.send(ans);
      })
  }).catch(function(err) {
    console.log(err);
  }); 



});

// LOGIN ROUTE HANDLING
// Request: A post request with an email and password in a JSON
// Response: A JSON with all non-password-related data of the user loggedIn
// Error: Sends an error message if the login was unsuccessful (ex: email doesn't exist, incorrect pw)
app.post("/login", (req, res) => {
  login(req.body).then(function(ans) {
    delete ans.password;
    delete ans.salt;
    console.log(ans)
    res.send({
      'email': ans.email,
      'first': ans.first,
      'last': ans.last,
      'zipcode': ans.zipcode,
      'gender': ans.gender,
      'dob': ans.dob,
      'nickname': ans.nickname,
      'display_email': ans.display_email,
      'phone': ans.phone
    })
  })

});

// SIGNUP ROUTE HANDLING
// Request: A post request with various signUp information, including a desired password
// Response: A JSON with all non-password-related data of the user that was signedUp
// Error: Sends an error message if signUp was unsuccessful (ex: email already exists)
app.post("/signUp", (req, res) => {
  const signUpInfo = signUp(req.body);
  // Delete password and salt from the signUp info
  delete signUpInfo.password;
  delete signUpInfo.salt;
  // Send back the signUpInfo
  res.send(signUpInfo);  
 // deleteSchema();
  //createSchema();
  //console.log("Schema created.");
    
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


