import SignUpButton from "./SignUpButton";
import SignUpHeader from "./SignUpHeader";
import { useState } from "react";
import { login } from "../apis/loginSubmit.js"
import SignOutHeader from "./SignOutHeader";

const Login = () => {

    // Under development code for setting login state
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
  
    const handleSubmit = async e => {
        e.preventDefault();
        // Send the username and password to the server
        const loginData = login(inputs, window.location.origin);
        // Alert that a login is successful
        alert("Login Successful");
        // Set the local storage to signify that the user is loggedIn
        window.localStorage.setItem('loggedIn', true);
        // Set other local storage information
        window.localStorage.setItem('first', loginData.first);
        window.localStorage.setItem('last', loginData.last);
    }

    // Return the signout header if the user is logged in. (has a defined localStorage loggedIn property equal to true)
    if (window.localStorage.hasOwnProperty('loggedIn')) {
        if (window.localStorage.getItem('loggedIn')) {
            return (
                <div>
                <SignOutHeader/>
                <div className='mainSignUp'>
                    <div className='forms2'>
                            <b><p className='label'>Logged in as {window.localStorage.getItem('first')} {window.localStorage.getItem('last')}</p></b>
                            
                    </div>
                </div>
            </div>
            );
        }
    }
      
    // If the user is not logged in, return the login form
    return (
        <div>
            <SignUpHeader/>
            <div className='mainSignUp'>
                <div className='forms2'>
                    <form onSubmit={handleSubmit}>
                        <b><p className='label'>Glad to have you back!</p></b>
                         <label> Username:
                            <input
                                type="text"
                                name="email"
                                value={inputs.email || ""}
                                onChange={handleChange}
                                placeholder='e.g. abc123'
                            />
                        </label><br /><br />
                        <label> Password:
                            <input
                                type="password"
                                name="pw"
                                value={inputs.password || ""}
                                onChange={handleChange}
                            />
                        </label><br /><br />
                        <SignUpButton className='long' text='Login'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
