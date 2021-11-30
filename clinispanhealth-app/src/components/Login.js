import EnterField from "./EnterField";
import SignUpButton from "./SignUpButton";
import SignUpHeader from "./SignUpHeader";
import { useState } from "react";
import axios from 'axios';



const Login = () => {

    // Under development code for setting login state

    const handleSubmit = function(event) 
    {
        event.preventDefault();
    }
/*
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState()
  
    const handleSubmit = async e => {
        e.preventDefault();
        const user = { username, password };

        // send the username and password to the server
        const response = await axios.post(
            window.location.origin,
            user
        );
        // set the state of the user
        setUser(response.data)
        // store the user in localStorage
        localStorage.setItem('user', response.data)
        console.log(response.data)
    }

    if (user) {
        return <div>{user.name} is loggged in</div>;
      } */

    return (
        <div>
            <SignUpHeader/>
            <div className='mainSignUp'>
                <div className='forms2'>
                    <form onSubmit={handleSubmit}>
                        <b><p className='label'>Glad to have you back!</p></b>
                        <EnterField forName='emailAddress' label='Email Address' placeholder='e.g. abc123@gmail.com'/>
                        <EnterField forName='pw' label='Password'/>
                        <SignUpButton className='long' text='Login'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
