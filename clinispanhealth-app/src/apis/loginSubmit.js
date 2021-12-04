import axios from 'axios';

// LOGIN
// Inputs: An object containing an email and password
// Outputs: An object containing all non-password-related information of the user
// Error: Throws an error message if the login was not successful (ex: email doesn't exist, incorrect pw)
export async function login(inputs, host) {
    
    const result = await axios ({
        method: 'POST',
        url: `${host}/login`,
        responseType: JSON,
        data: {
            email: inputs.email,
            password: inputs.password
        }
    });

    return result;
}