import axios from 'axios';

// LOGIN
// Inputs: An object containing an email and password
// Outputs: An object containing all non-password-related information of the user
// Error: Throws an error message if the login was not successful (ex: email doesn't exist, incorrect pw)
export async function login(inputs, host) {
    
  await axios ({
        method: 'POST',
        url: `${host}/login`,
        responseType: JSON,
        data: {
            email: inputs.email,
            password: inputs.password
        }
    }).then(function(res) {
        // Sets all of the user values to be shown in the Manage Profile page and the Home Page
        window.localStorage.setItem('email', res.data.email);
        window.localStorage.setItem('first', res.data.first);
        window.localStorage.setItem('last', res.data.last);
        window.localStorage.setItem('zipcode', res.data.zipcode);
        window.localStorage.setItem('gender', res.data.gender);
        window.localStorage.setItem('dob', res.data.dob);
        window.localStorage.setItem('phone', res.data.phone);
        window.localStorage.setItem('nickname', res.data.nickname);
        window.localStorage.setItem('display_email', res.data.display_email);

          // Set the local storage to signify that the user is loggedIn
          window.localStorage.setItem('loggedIn', true);
    })
   
}