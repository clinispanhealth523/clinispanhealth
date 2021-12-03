import SignUpButton from "./SignUpButton";
import SignUpHeader from "./SignUpHeader";
import { useState } from "react";
import axios from 'axios';
import SignOutHeader from "./SignOutHeader";

const Login = () => {

    // Under development code for setting login state


    const [user, setUser] = useState({
        id: -1,
        email: "",
        pw: "",
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser(values => ({...values, [name]: value}));
    }
  
    const handleSubmit = async e => {
        e.preventDefault();
        // send the username and password to the server

        const response = await axios.get(
            window.location.origin + `/user/` + user.email,
            user
        );
        // set the state of the user
        setUser(response.data)
      //  alert(response.data.email)
        // store the user in localStorage
        window.localStorage.setItem('user', response.data.first + ',' + response.data.last + ',' + response.data.email)
    }
    const loggedIn = window.localStorage.getItem('user').split(',')

    if (loggedIn[1]) {
        return (
            <div>
            <SignOutHeader/>
            <div className='mainSignUp'>
                <div className='forms2'>
                        <b><p className='label'>Logged in as {loggedIn[0]} {loggedIn[1]}</p></b>
                         
                </div>
            </div>
        </div>
        )
    }
      
        
    
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
                                value={user.email || ""}
                                onChange={handleChange}
                                placeholder='e.g. abc123'
                            />
                        </label><br /><br />
                        <label> Password:
                            <input
                                type="password"
                                name="pw"
                                value={user.pw || ""}
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

export default Login
