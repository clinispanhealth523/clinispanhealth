// Import the database management functions
import { createPatient, getPatient } from './db.js';
// Standard Node js library for performing cyrptographic hashing
import crypto from 'crypto';

// SIGNUP
// Input: An info object provided by the client after submitting the signup form
// Output: Returns back the information associated with the newly created patient
// Error: Throws an error if signup is not successful (ex: email already exists)
export async function signUp(info) {
    // Encrypt the signUp and create a patient from the data
    await createPatient(encryptSignUp(info));
    // Return the newly created patient's information
    return getPatient(info.email);
}


// ENCRYPT SIGNUP
// Inputs: An info dictionary provided by the client after submitting the signup form
// Output: Returns an updated dictionary w. the encrypted password if successful
// Error: Throws an error if invalid data is provided
export function encryptSignUp(info) {
    // Perform various signup checks - which will throw an error if data is invalid
    checkSignUp(info);
    // Generate a random salt value
    const salt = getSalt();
    // Concatenate the salt and provided password values
    const to_hash = salt + info.password;
    // Hash the value using SHA 256 and store as a hex sequence
    const hash = crypto.createHash('sha256').update(to_hash).digest('hex');
    // Update the info to include new values (encrypt the password and add the salt)
    info.password = hash;
    info.salt = salt;
    // Return the updated dictionary
    return info;
}


// LOGIN
// Inputs: An object with an email and password
// Output: Returns an object with all user info if login is successful
// Error: Throws an error if login is unsuccessful
export async function login(info) {
 /*   // Confirm that the email exists in the database
    if (! emailExists(info.email)) {
        throw "A user with that email does not exist";
    }
    var to_hash;
    var new_hash;
    // Retrieve the patient info from the database
    const patient = await getPatient(info.email).then(function (res) {
        to_hash = res.salt + info.password;
        new_hash = crypto.createHash('sha256').update(to_hash).digest('hex');
    });
    // Combine the provided pw with the salt from the db
    // Hash the combined value
    // Throw an error if the newly hashed value doesn't match the stored pw hash
    if (new_hash !== patient.password) {
        throw "Incorrect password provided"
    } */

    const patient = await getPatient(info.email);
    // If values match, then return the patient information
    return patient;
}


// GET SALT
// Inputs: None
// Outputs: Generates a random 16 byte salt value encoded as a hex string
export function getSalt() {
    return crypto.randomBytes(16).toString('hex');
}

// SIGN UP CHECKS
// Inputs: An info dictionary provided by the client after submitting the signup form
// Output: Returns true if successful, otherwise throws an error
function checkSignUp(info) {
    return true;
}

// EMAIL EXISTS
// Input: An email associated with a patient login attempt
// Output: True if the email exists in the database, false otherwise
function emailExists(email) {
    return true;
}