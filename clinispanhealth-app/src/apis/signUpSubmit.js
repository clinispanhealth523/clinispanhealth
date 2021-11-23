import axios from 'axios';


export async function signUp(inputs, host) {


    // Test the first name
    testName(inputs.first, "first");
    // Test the last name
    testName(inputs.last, "last");
    // Test the email address
    testEmail(inputs.email);
    
    // Axios Post Requests


// send the data in JSON format to the server
  console.log(inputs);

    const result = await axios({
        method: 'post',
        url: `${host}/signUp`,
        data: {
            first: 'Joe',
            last: 'Schmoe'
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