
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const App = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateForm = () => {
        if (!username || username.length < 4) {
            if (!username || username.length < 4) {
                var nameerrormsg = document.getElementById("name-error").innerHTML = "Valid name"
                // alert('Please enter a username with more than 4 characters');
                return false;
            }
            // alert('Please enter a username with more than 4 characters');
            // return false;
        }
        if (!email || !email.match(/^[A-Za-z0-9\._\-]+[@][A-Za-z]+[\.][a-z]{2,4}$/)) {
            alert('Please enter a valid email');
            return false;
        }
        if (!password || password.length < 6) {
            alert('Please enter a password with more than 6 characters');
            return false;
        }
        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully');
        }
    }

    return (
        <form className='form-group row' onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
                <input type="text" id="name-value" className="form-control" placeholder="User Name" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <span id="name-error" className="error"></span>
            </div>
            <div className="form-outline mb-4">
                <input type="email" id="emailid" className="form-control" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <span id="email-error" class="error"></span>
            </div>
            <div className="form-outline mb-4">
                <input type="password" id="passwordid" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <span id="pwd-error" class="error"></span>
            </div>
            <div className="text-center pt-1 mb-5 pb-1">
                <button id="btn" className="form-control btn btn-dark" type="submit">Create Account</button>
            </div>
            <div className="d-flex align-items-center justify-content-center pb-4">
                <p className="mb-0 me-2 text-white">Already have an account? </p>
                <Link className='registerlogin'>Login</Link>
            </div>
        </form>
    );
}

export default App;



