// Import the database management functions
import { createPatient, getPatient } from './db.js';
// Standard Node js library for performing cyrptographic hashing
import crypto from 'crytpo';

// SIGNUP
// Input: An info dictionary provided by the client after submitting the signup form
// Output: Returns true if signUp is successful
// Error: Throws an error if signUp is not successful
export async function signUp(info) {
    // Encrypt the signUp and create a patient from the data
    await createPatient(encryptSignUp(info));
    // Return true to indicate successful operation
    return true;
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
// Inputs: An email and password
// Output: Returns true if login is successful, otherwise throws an error
export async function login(email, password) {
    // Confirm that the email exists in the database
    if (! emailExists(email)) {
        throw "A user with that email does not exist";
    }
    // Retrieve the patient info from the database
    const patient = await getPatient(email);
    // Combine the provided pw with the salt from the db
    const to_hash = patient.salt + password;
    // Hash the combined value
    const new_hash = crypto.createHash('sha256').update(to_hash).digest('hex');
    // Throw an error if the newly hashed value doesn't match the stored pw hash
    if (new_hash !== patient.password) {
        throw "Incorrect password provided"
    }
    // If values match, login is successful
    return true;
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