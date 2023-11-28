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
import Footer from '../../Footer/Footer'

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
        <Footer/>
      </div>
        </div>
    )
}

export default About
