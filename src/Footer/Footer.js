import React from 'react'
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


export default function Footer() {
  return (
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
                    <Link to='https://github.com/FRABINAJ'><img className="fas fa-home mr-3 " style={{ height: "20px", width: "20px" }} src={githubicon} /></Link>
                    <Link to='https://www.linkedin.com/in/frabinaj-ram-10b387200/'><img className="fas fa-home mr-3 " style={{ height: "20px", width: "20px" }} src={linkdinicon} /></Link>
                    <Link to="https://www.instagram.com/_frabin/"><img className="fas fa-home mr-3 " style={{ height: "20px", width: "20px" }} src={instagramicon} /></Link>
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
                  <Link to="/login" className="text-dark">Login</Link>
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
                    <p className="text-dark">Kannur, Kerala</p>
                  </div>
                  <div style={{ display: "inline-flex", gap: "6px", textAlign: "center" }}>
                    <img className="fas fa-home mr-3 " style={{ height: "20px", width: "20px" }} src={emailicon} />
                    <h6 className="text-dark">Email:</h6>
                    <p className="text-dark">pebipacha57@gmail.com</p>
                  </div>
                  <div style={{ display: "inline-flex", gap: "6px", textAlign: "center" }}>
                    <img className="fas fa-home mr-3 " style={{ height: "20px", width: "20px" }} src={phoneicon} />
                    <h6 className="text-dark">Phone:</h6>
                    <p className="text-dark">+91 989571####</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="text-center p-3 text-dark">
            Copyright 2023, Design and develop by Frabinaj Ram. All rights reserved.
          </div>
        </footer>
      </div>
  )
}
