import React from 'react'
// Image Gallery
import gallery1 from "./gallery-01.jpg"
import gallery2 from "./gallery-02.jpg"
import gallery3 from "./gallery-03.jpg"
import gallery4 from "./gallery-04.jpg"
import gallery5 from "./gallery-05.jpg"
import gallery6 from "./gallery-06.jpg"
import gallery7 from "./gallery-07.jpg"
import gallery8 from "./gallery-08.jpg"
// emailDiv
import MaleTourist from "./male-tourist.png"
//
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
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            {/*  */}
            {/* Image Gallery */}
            {/*  */}
            <div id="imagegallary" className="container pt-5 border-0">
                <div style={{ backgroundColor: "#FAA935", border: "1px solid #FAA935", borderRadius: "20px", width: "100px" }}><p className="hometravelsectiondivp pt-2">Gallery</p></div>
            </div>
            <div className="container border-0">
                <h1>Visit our customers tour gallery</h1>
            </div>
            <div className="container border-0 ">
                <div class="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div className=" gallaryimage">
                            <img src={gallery1} class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />
                        </div>
                        <div className=" gallaryimage">
                            <img src={gallery5} class="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape" />
                        </div>
                    </div>
                    <div className="col-lg-3 mb-4 mb-lg-0">
                        <div className=" gallaryimage">
                            <img src={gallery2} class="w-100 shadow-1-strong rounded mb-4" alt="Mountains in the Clouds" />
                        </div>
                        <div className=" gallaryimage">
                            <img src={gallery6} class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />
                        </div>
                    </div>
                    <div className="col-lg-3 mb-4 mb-lg-0">
                        <div className=" gallaryimage">
                            <img src={gallery3} class="w-100 shadow-1-strong rounded mb-4" alt="Waves at Sea" />
                        </div>
                        <div className=" gallaryimage">
                            <img src={gallery7} class="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" />
                        </div>
                    </div>
                    <div className="col-lg-3 mb-4 mb-lg-0">
                        <div className=" gallaryimage">
                            <img src={gallery4} class="w-100 shadow-1-strong rounded mb-4" alt="New Image 1" />
                        </div>
                        <div className=" gallaryimage">
                            <img src={gallery8} class="w-100 shadow-1-strong rounded mb-4" alt="New Image 2" />
                        </div>
                    </div>
                </div>

            </div>
            {/*  */}
            {/* EmailDiv */}
            {/*  */}
            <div className='mt-10 container-fluid'>
                <div className='subscribediv'>
                    <div class="columns subfieldmaincol">
                        {/* 1st column */}
                        <div class="column subfieldcol" style={{ display: 'flex', justifyContent: 'left', textAlign: "left", paddingTop: '100px', paddingLeft: "80px" }}>
                            <div>
                                <h2>Subscribe now for useful traveling information.</h2>
                                <div style={{ backgroundColor: "white", height: "60px", marginTop: "20px" }}>
                                    <input style={{ height: "100%", width: "80%", border: "0", outline: "0" }} type="text" placeholder="Enter your email" />
                                    <button style={{ height: "80%", width: "15%" }} type="submit" className='subscribebutton'>Subscribe</button>
                                </div>
                                <p style={{ marginTop: "20px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Quia odio iure quasi! Deserunt, similiquenin!</p>
                            </div>
                        </div>
                        {/* 2nd column */}
                        <div class="column subfieldcol">
                            <img src={MaleTourist} alt="male-Tourist" className='responsive responsive-image' />
                        </div>
                    </div>
                </div>
            </div >
            {/*  */}
            {/* Footer */}
            {/*  */}
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
                    <a href="#imagegallary" className="text-dark">About</a>
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
                    <a href="/register" className="text-dark">Register</a>
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

export default About
