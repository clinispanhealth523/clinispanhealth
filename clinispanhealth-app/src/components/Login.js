import SignUpButton from "./SignUpButton";
import SignUpHeader from "./SignUpHeader";
import { useState } from "react";
import { login } from "../apis/loginSubmit.js"
import SignOutHeader from "./SignOutHeader";
import { useHistory } from 'react-router-dom';

const Login = () => {

    let history = useHistory();

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
    login(inputs, window.location.origin);

    
        // Alert that a login is successful
        alert("Login Successful.");
      
        // Redirect patient to Home Page
        history.push("/home");
    }

    // Return the signout header if the user is logged in. (has a defined localStorage loggedIn property equal to true)
    if (window.localStorage.hasOwnProperty('loggedIn')) {
        if (window.localStorage.getItem('loggedIn')) {
            return (
                <div>
                <SignOutHeader/>
                <div className='mainSignUp'>
                    <div className='forms2'>
                            <b><p className='label'>Logged in as {window.localStorage.getItem('email')} {window.localStorage.getItem('last')}</p></b>
                            
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
                                name="password"
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
