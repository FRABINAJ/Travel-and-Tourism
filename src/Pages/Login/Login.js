import React, { useState } from 'react'
import "./Login.css"
import register from "./login.png"
import user from './user.png'
import { Link } from 'react-router-dom'
//
import Footer from '../../Footer/Footer'
//

const Login = () => {
  // Form validation 
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
                        <img className='img-fluid mt-5' id='registerimage' src={register} alt="registerimage" style={{ marginLeft: "80px" }} />
                      </div>
                      <div className="col-lg-6 registersection">
                        <center><img src={user} id='userimg' /></center>
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
      {/* footer */}
      <div className="container-fluid my-5">
        <Footer />
      </div>

    </div>
  )
}

export default Login