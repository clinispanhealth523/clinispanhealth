import SignUpButton from "./SignUpButton";
import SignUpHeader from "./SignUpHeader";
import { useState } from "react";
import axios from 'axios';



const Login = () => {

    // Under development code for setting login state


    const [user, setUser] = useState({
        email: "",
        pw: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser(values => ({...values, [name]: value}));
    }
  
    const handleSubmit = async e => {
        e.preventDefault();
        // send the username and password to the server

        const response = await axios.post(
            window.location.origin + `/login`,
            user
        );
        // set the state of the user
        setUser(response.data)
        // store the user in localStorage
        localStorage.setItem('user', response.data.email)
    }

  /*  if (user.loggedIn) {
        return <div>{user.email} is loggged in</div>;
      } */

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
