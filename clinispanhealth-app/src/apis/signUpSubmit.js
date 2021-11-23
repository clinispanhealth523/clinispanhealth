import axios from 'axios';


export async function signUp(inputs, host) {

/*
    // Test the first name
    testName(inputs.first, "first");
    // Test the last name
    testName(inputs.last, "last");
    // Test the email address
    testEmail(inputs.email);
     */
    
    
    // Axios Post Requests
    
    // INSERT CHECKING HERE TO SEE IF INPUTS.PASSWORD AND INPUTS.PW2 MATCH


// send the data in JSON format to the server
    const result = await axios({
        method: 'POST',
        url: `${host}/signUp`,
        responseType: JSON, 
        data: {
            first: inputs.first,
            last: inputs.last,
            email: inputs.email,
            password: inputs.password,
            zipcode: inputs.zipcode,
            phone: inputs.phone,
            referral_code: inputs.referral_code
        }
    }).catch(function(err) {
        console.log(err);
    });


   /* if (response.status !== 200) {
        const error = response.statusText
    }*/
    
    
   /* const result = await axios({
        method: 'get',
        url: `${host}/api`,
        responseType: 'json'
    });

    console.log(result.data);
    */
    return true;
}

// Test the first and last names
export function testName(tname, type) {
    // Name fields cannot be blank
    if (tname === '') throw `Please enter a ${type} name`;
    // Name fields cannot include numbers or any special characters (besides dashes and spaces)
    if (! /^[a-zA-Z\s-]*$/.test(tname)) throw `Please include only letters, dashes, and spaces in the ${type} name`;
    return true;
}


// Tests an email address
export function testEmail(email) {
    // Email field cannot be blank
    if (email === '') throw 'Please enter an email'
}