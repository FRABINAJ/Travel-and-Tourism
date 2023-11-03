import React, { useState } from 'react'
import "./Login.css"
import register from "./login.png"
import user from './user.png'
import { Link } from 'react-router-dom'
//
import locationicon from './location.svg';
import emailicon from './email.svg';
import phoneicon from './Phone.svg'
//
import usericon from './usericon.svg'
import githubicon from './githubicon.svg'
import linkdinicon from './linkdinicon.svg'
import instagramicon from './instagramicon.svg'
//

const Login = () => {
  // Form validation 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    if (!email || !email.match(/^[A-Za-z0-9\._\-]+[@][A-Za-z]+[\.][a-z]{2,4}$/)) {
      var emailerrormsg = document.getElementById("email-error").innerHTML = "Enter a valid email"
      return false;
    }
    if (!password || password.length < 6) {
      var passworderrormsg = document.getElementById("pwd-error").innerHTML = "Password must be morethan 6 characters"
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
  
  //changing page
  
  //
  return (
    <div>
      <div>

<>
  <section id='loginid' className="h-100 " style={{ backgroundColor: "#eee" }}>
    <div className="container-fluid py-5 ">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6 d-flex ">
                <img className='img-fluid' id='registerimage' src={register} alt="registerimage" />
              </div>
              <div className="col-lg-6 registersection">
                <img src={user} id='userimg' />
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center">
                    <h2 className="mt-1 mb-5 pb-1 text-white">Login</h2>
                  </div>
                  {/*  */}
                  <form className='form-group row' onSubmit={handleSubmit}>
                    <div className="form-outline-white mb-4">
                      <input type="email" id="emailid" className="form-control" placeholder='Email' maxLength={30} value={email} onChange={(e) => setEmail(e.target.value)} required />
                      <span id="email-error" class="error"></span>
                    </div>
                    <div className="form-outline-white mb-4">
                      <input type="password" id="passwordid" className="form-control" placeholder="Password" maxLength={20} value={password} onChange={(e) => setPassword(e.target.value)} required />
                      <span id="pwd-error" class="error"></span>
                    </div>
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button id="btn" className="btn btn-dark" type="submit">Login</button>
                    </div>
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2 text-white">Don't have an account? </p>
                      <Link to="/register" className='registerlogin'>Register</Link>
                    </div>
                  </form>
                  {/*   */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>


</div>
<div className="container-fluid my-5">
<footer className="text-center text-lg-start text-white" style={{ backgroundColor: "white" }}>

  <section className="row">
    <div className="container border-0 text-center text-md-start pt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <img className="text-uppercase fw-bold pb-3" src="https://www.achieversit.com/assets/images/logo-white.png" height={"70px"} />
          <p className="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ipsum, natus!
          </p>
          <div className="" style={{ display: "inline-flex", gap: "10px" }} >
            <Link><img className="fas fa-home mr-3 " style={{ height: "20px", width: "20px" }} src={usericon} /></Link>
            <Link><img className="fas fa-home mr-3 " style={{ height: "20px", width: "20px" }} src={githubicon} /></Link>
            <Link to='https://www.linkedin.com/company/achieversit-trainings/'><img className="fas fa-home mr-3 " style={{ height: "20px", width: "20px" }} src={linkdinicon} /></Link>
            <Link to="https://www.instagram.com/achieversit/"><img className="fas fa-home mr-3 " style={{ height: "20px", width: "20px" }} src={instagramicon} /></Link>
          </div>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold text-dark pb-3">Discover</h6>
          <p>
            <Link to="/home" className="text-dark">Home </Link>
          </p>
          <p>
            <Link to="/about" className="text-dark">About</Link>
          </p>
          <p>
            <Link to="/tours" className="text-dark">Tours</Link>
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold text-dark pb-3">Quick Link</h6>
          <p>
            <Link to="/home" className="text-dark">Gallery</Link>
          </p>
          <p>
            <a href='#loginid' className="text-dark">Login</a>
          </p>
          <p>
            <Link to="/register" className="text-dark">Register</Link>
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold pb-3 text-dark">Contact</h6>
          <div style={{ display: "inline-flex", gap: "6px", textAlign: "center" }}>
            <img className="fas fa-home mr-3 " style={{ height: "20px", width: "20px" }} src={locationicon} />
            <h6 className="text-dark">Address:</h6>
            <p className="text-dark">Shimoga, Karnataka</p>
          </div>
          <div style={{ display: "inline-flex", gap: "6px", textAlign: "center" }}>
            <img className="fas fa-home mr-3 " style={{ height: "20px", width: "20px" }} src={emailicon} />
            <h6 className="text-dark">Email:</h6>
            <p className="text-dark">adarshaadi 1997@gmail.com</p>
          </div>
          <div style={{ display: "inline-flex", gap: "6px", textAlign: "center" }}>
            <img className="fas fa-home mr-3 " style={{ height: "20px", width: "20px" }} src={phoneicon} />
            <h6 className="text-dark">Phone:</h6>
            <p className="text-dark">+91 8660435323</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-3 text-dark">
    Copyright 2023, Design and develop by adarsha A Helvar. All rights reserved.
  </div>
</footer>
</div>
      
    </div>
  )
}

export default Login