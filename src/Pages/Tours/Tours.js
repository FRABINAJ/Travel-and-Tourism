import React from 'react'
import './Tours.css'
// Images
import AllTours from "./tour.jpg"
import MaleTourist from "./male-tourist.png"
//
// search div
import searchlocation from "./searchlocation.png"
import searchdistance from "./searchdistance.png"
import people from "./people.png"
import searchicon from "./searchicon.png"
//
// Tour travel
import tourimg1 from "./tour-img01.jpg"
import tourimg2 from "./tour-img02.jpg"
import tourimg3 from "./tour-img03.jpg"
import tourimg4 from "./tour-img04.jpg"
import tourimg5 from "./tour-img05.jpg"
import tourimg6 from "./tour-img06.jpg"
import tourimg7 from "./tour-img07.jpg"
import staricon from "./star icon.png"
import loc from "./loc.png"
// Footer
import locationicon from './location.svg';
import emailicon from './email.svg';
import phoneicon from './Phone.svg'
//
import usericon from './usericon.svg'
import githubicon from './githubicon.svg'
import linkdinicon from './linkdinicon.svg'
import instagramicon from './instagramicon.svg'
//
import { Link } from "react-router-dom";

const Tours = () => {
  function ala() {
    alert("Create an account")
}
  return (
    <div>
      <div className='container-fluid'>
        <img className="AllTourImage" src={AllTours} />
        <h1 class="centered">All Tours</h1>
      </div>
       {/*  */}
            {/* Search section */}
            {/*  */}
            <div className="container border-0 mb-5 mt-5">
                <div className="saerchdiv row">
                    <div className="col-sm" style={{ display: "inline-flex" }}>
                        <div>
                            <img src={searchlocation} alt="searchlocation" className="searchimage" />
                        </div>
                        <div className="ms-2">
                            <h4 style={{ color: "black", fontWeight: "500" }}>Location</h4>
                            <input type="text" placeholder="Where are you going" className="searchdiv border-0" />
                        </div>
                        <div className="vl ms-3 mt-2"></div>
                    </div>
                    <div className="col-sm" style={{ display: "inline-flex" }}>
                        <div>
                            <img src={searchdistance} alt="searchlocation" className="searchimage" />
                        </div>
                        <div className="ms-2">
                            <h4 style={{ color: "black", fontWeight: "500" }}>Distance</h4>
                            <input type="number" placeholder="Distance k/m" className="searchdiv border-0" />
                        </div>
                        <div className="vl ms-3 mt-2"></div>
                    </div>
                    <div className="col-sm" style={{ display: "inline-flex" }}>
                        <div>
                            <img src={people} alt="searchlocation" className="searchimage" />
                        </div>
                        <div className="ms-2">
                            <h4 style={{ color: "black", fontWeight: "500" }}>Max People</h4>
                            <input type="number" placeholder="0" className="searchdiv border-0" />
                        </div>
                    </div>
                    <div className="col-sm mt-3">
                        <button style={{ borderRadius: "5px", border: "#FAA935", backgroundColor: "#FAA935" }}><img src={searchicon} className="searchimage" /></button>
                    </div>
                </div>

            </div>
             {/*  */}
            {/* Tour Travel sectio */}
            {/*  */}
            <div id='tourid' className="container mt-5 mb-5 border-0">
                <div class="row">
                    <div class="col-3">
                        <div>
                            <img src={tourimg3} alt="tourimg1" className="tourimg" style={{ width: "100%" }} />
                            {/* <div style={{ background: "orange", color: "white" }}>Featured</div> */}
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <img src={loc} alt="" className="tourloc ms-1" />
                            <p style={{ fontWeight: "600" }}>Bangkok</p>
                            <img src={staricon} alt="staricon" className="starIcon ms-5 mt-1" />
                            <p className="ms-2">Not rated</p>
                        </div>
                        <div>
                            <h4>Snowy Mountains, Thailand</h4>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <h4 style={{ color: "grey" }}><font style={{ color: "orange" }}>$990</font>/per person</h4>
                            <button style={{ backgroundColor: "orange", color: "white" }} className="btn ms-2" onClick={ala}>Book now</button>
                        </div>
                    </div>
                    <div class="col-3">
                        <div>
                            <img src={tourimg6} alt="tourimg1" className="tourimg" style={{ width: "100%" }} />
                            {/* <div style={{ background: "orange", color: "white" }}>Featured</div> */}
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <img src={loc} alt="" className="tourloc ms-1" />
                            <p style={{ fontWeight: "600" }}>Tokyo</p>
                            <img src={staricon} alt="staricon" className="starIcon ms-5 mt-1" />
                            <p className="ms-2">Not rated</p>
                        </div>
                        <div>
                            <h4>Cherry Blosoms Spring</h4>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <h4 style={{ color: "grey" }}><font style={{ color: "orange" }}>$99</font>/per person</h4>
                            <button style={{ backgroundColor: "orange", color: "white" }} className="btn ms-2" onClick={ala}>Book now</button>
                        </div>
                    </div>
                    <div class="col-3">
                        <div>
                            <img src={tourimg2} alt="tourimg1" className="tourimg" style={{ width: "100%" }} />
                            {/* <div style={{ background: "orange", color: "white" }}>Featured</div> */}
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <img src={loc} alt="" className="tourloc ms-1" />
                            <p style={{ fontWeight: "600" }}>Bali</p>
                            <img src={staricon} alt="staricon" className="starIcon ms-5 mt-1" />
                            <p className="ms-2">4.0(1)</p>
                        </div>
                        <div>
                            <h4>Bali, Indonasia</h4>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <h4 style={{ color: "grey" }}><font style={{ color: "orange" }}>$99</font>/per person</h4>
                            <button style={{ backgroundColor: "orange", color: "white" }} className="btn ms-2" onClick={ala}>Book now</button>
                        </div>
                    </div>
                    <div class="col-3">
                        <div>
                            <img src={tourimg7} alt="tourimg1" className="tourimg" style={{ width: "100%" }} />
                            {/* <div style={{ background: "orange", color: "white" }}>Featured</div> */}
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <img src={loc} alt="" className="tourloc ms-1" />
                            <p style={{ fontWeight: "600" }}>paris</p>
                            <img src={staricon} alt="staricon" className="starIcon ms-5 mt-1" />
                            <p className="ms-2">Not rated</p>
                        </div>
                        <div>
                            <h4>Holmen Lofoten,france</h4>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <h4 style={{ color: "grey" }}><font style={{ color: "orange" }}>$99</font>/per person</h4>
                            <button style={{ backgroundColor: "orange", color: "white" }} className="btn ms-2" onClick={ala}>Book now</button>
                        </div>
                    </div>

                    <div class="w-100 mt-5"></div>

                    <div class="col-3">
                        <div>
                            <img src={tourimg4} alt="tourimg1" className="tourimg" style={{ width: "100%" }} />
                            {/* <div style={{ background: "orange", color: "white" }}>Featured</div> */}
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <img src={loc} alt="" className="tourloc ms-1" />
                            <p style={{ fontWeight: "600" }}>Phuket</p>
                            <img src={staricon} alt="staricon" className="starIcon ms-5 mt-1" />
                            <p className="ms-2">Not rated</p>
                        </div>
                        <div>
                            <h4>Beautifull Sunrise Thailand</h4>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <h4 style={{ color: "grey" }}><font style={{ color: "orange" }}>$99</font>/per person</h4>
                            <button style={{ backgroundColor: "orange", color: "white" }} className="btn ms-2" onClick={ala}>Book now</button>
                        </div>
                    </div>
                    <div class="col-3">
                        <div>
                            <img src={tourimg1} alt="tourimg1" className="tourimg" style={{ width: "100%" }} />
                            {/* <div style={{ background: "orange", color: "white" }}>Featured</div> */}
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <img src={loc} alt="" className="tourloc ms-1" />
                            <p style={{ fontWeight: "600" }}>London</p>
                            <img src={staricon} alt="staricon" className="starIcon ms-5 mt-1" />
                            <p className="ms-2">3.3 (4)</p>
                        </div>
                        <div>
                            <h4>Westminister Bridge</h4>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <h4 style={{ color: "grey" }}><font style={{ color: "orange" }}>$99</font>/per person</h4>
                            <button style={{ backgroundColor: "orange", color: "white" }} className="btn ms-2" onClick={ala}>Book now</button>
                        </div>
                    </div>
                    <div class="col-3">
                        <div>
                            <img src={tourimg5} alt="tourimg1" className="tourimg" style={{ width: "100%" }} />
                            {/* <div style={{ background: "orange", color: "white" }}>Featured</div> */}
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <img src={loc} alt="" className="tourloc ms-1" />
                            <p style={{ fontWeight: "600" }}>Bali</p>
                            <img src={staricon} alt="staricon" className="starIcon ms-5 mt-1" />
                            <p className="ms-2">Not rated</p>
                        </div>
                        <div>
                            <h4>Nusa Pendia Bali, Indonasia</h4>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <h4 style={{ color: "grey" }}><font style={{ color: "orange" }}>$99</font>/per person</h4>
                            <button style={{ backgroundColor: "orange", color: "white" }} className="btn ms-2" onClick={ala}>Book now</button>
                        </div>
                    </div>
                    <div class="col-3">
                        <div>
                            <img src={tourimg1} alt="tourimg1" className="tourimg" style={{ width: "100%" }} />
                            {/* <div style={{ background: "orange", color: "white" }}>Featured</div> */}
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <img src={loc} alt="" className="tourloc ms-1" />
                            <p style={{ fontWeight: "600" }}>London</p>
                            <img src={staricon} alt="staricon" className="starIcon ms-5 mt-1" />
                            <p className="ms-2">Not rated</p>
                        </div>
                        <div>
                            <h4>Heelo world</h4>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <h4 style={{ color: "grey" }}><font style={{ color: "orange" }}>$990</font>/per person</h4>
                            <button style={{ backgroundColor: "orange", color: "white" }} className="btn ms-2" onClick={ala}>Book now</button>
                        </div>
                    </div>
                </div>
            </div>

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
                                        <Link to="/about" className="text-dark">About</Link>
                                    </p>
                                    <p>
                                        <a href="#tourid" className="text-dark">Tours</a>
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
    </div >
  )
}

export default Tours
