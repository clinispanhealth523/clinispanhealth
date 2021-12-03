import SignUpButton from "./SignUpButton";
import SignUpHeader from "./SignUpHeader";
import { useState } from "react";
import axios from 'axios';


const loggedIn = localStorage.getItem('user')
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
        alert(response.data.email)
        // store the user in localStorage
        localStorage.setItem('user', response.data.email)
    }

    if (user.id >= 0) {
       return (
        <div>
        <SignUpHeader/>
        <div className='mainSignUp'>
            <div className='forms2'>
            <div><h2>You've successfully logged in, {user.first} {user.last}!</h2></div>
            </div>
        </div>
    </div>
       )
      }

      if (loggedIn) {
       return(
     <div>
        <SignUpHeader/>
        <div className='mainSignUp'>
            <div className='forms2'>
            <div><h2>You're already logged in as {loggedIn}!</h2></div>
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
                         <label> Email Address:
                            <input
                                type="text"
                                name="email"
                                value={user.email || ""}
                                onChange={handleChange}
                                placeholder='e.g. abc123@gmail.com'
                            />
                        </label><br /><br />
                        <label> Create Password:
                            <input
                                type="text"
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
