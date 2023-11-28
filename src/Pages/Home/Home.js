import React from "react";
import './Home.css'
// Footer

//
import world from "./world.png"
//
import hero1 from "./hero-img01.jpg"
import hero3 from "./video.mp4"
import hero2 from "./hero-img02.jpg"
// search div
import searchlocation from "./searchlocation.png"
import searchdistance from "./searchdistance.png"
import people from "./people.png"
import searchicon from "./searchicon.png"
//
import weather from "././weather.png"
import plugins from "./guide.png"
import sstings from "./customization.png"
//
import experience from "./experience.png"
//
// Image Gallery
import gallery1 from "./gallery-01.jpg"
import gallery2 from "./gallery-02.jpg"
import gallery3 from "./gallery-03.jpg"
import gallery4 from "./gallery-04.jpg"
import gallery5 from "./gallery-05.jpg"
import gallery6 from "./gallery-06.jpg"
import gallery7 from "./gallery-07.jpg"
import gallery8 from "./gallery-08.jpg"
//Slideer div
//
import ava1 from "./ava-1.jpg"
import ava2 from "./ava-2.jpg"
import ava3 from "./ava-3.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-ui-kit/css/mdb.min.css';
//

// emailDiv
import MaleTourist from "./male-tourist.png"
//
import { Link } from "react-router-dom";
import { PageHeader } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import Tours_list from "../../Tours_List/Tours_list";
<link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossOrigin="anonymous"
/>
{/* MDB CSS */ }
<link
    href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.9.0/mdb.min.css"
    rel="stylesheet"
/>
//
const Home = () => {

    return (
        <div>
            {/* 1st travel section */}
            <div className="container-fluid hometravelsection" style={{ paddingTop: "50px" }} id="firstsection">
                <div className="container border-0 hometravelsectiondivdiv" style={{ display: "block", textAlign: "left", paddingLeft: "40px", paddingRight: "30px" }}>
                    <div>
                        <div style={{ display: "inline-flex" }}>
                            <div>
                                <div className="hometravelsectiondiv"><p className="hometravelsectiondivp pt-2">Know begore you go</p></div>
                            </div>
                            <div>
                                <img className="hometravelsectionimg" style={{ height: "50px", width: "auto" }} src={world} alt="" />
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingTop: "20px" }}>
                        <h1>Travelling opens  <br />the door to <br /> creating <font style={{ color: "#FAA935" }}>Memories</font></h1>
                    </div>
                    <div style={{ paddingTop: "20px" }}>
                        <p style={{ color: "grey" }} >Lorem ipsum dolor sit amet consecetur adipisicing elit. Omnis consequatur dolor nam modi labore facere id ut veniam itaque, sunt unde? Mollitia id soluta animi repudiandae omnis quibusdam illo blanditiis possimus ex sint cupiditate  corrupti labore non, qui est porro excepturi quasi labor.</p>
                    </div>
                </div>
                {/* 2nd section */}
                <div className="container border-0">
                    <div class="container border-0">
                        <div class="row">
                            <div class="col-sm">
                                <div>
                                    <div className="heroimg1div">
                                        <img style={{ borderRadius: "20px" }} className="heroimg" src={hero1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm">
                                <div style={{ paddingTop: "40px", }}>
                                    <div className="heroimg1div" style={{ height: "400px", width: "180px" }}>
                                        <video autoplay loop muted controls style={{ borderRadius: "20px", height: "100%" }} className="heroimg">
                                            <source src={hero3} />
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm">
                                <div style={{ paddingTop: "80px" }}>
                                    <div className="heroimg1div">
                                        <img style={{ borderRadius: "20px" }} className="heroimg" src={hero2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/*  */}
            {/* Search section */}
            {/*  */}
            <div className="container border-0 mb-5">
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
            {/* 2nd section */}
            {/*  */}
            <div>
                <div class="container border-0">
                    <div class="row">
                        <div class="col-sm">
                            <div>
                                <div>
                                    <p className="whatweserve">What we serve</p>
                                </div>
                                <div>
                                    <h1 className="alignleft">We offer our best services</h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm home2 ms-3">
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <div style={{ height: "50px", width: "50px", border: "1px solid #FAA935", borderRadius: "50%", backgroundColor: "#FAA935" }}>
                                    <img style={{ height: "40px", maxWidth: "100%" }} src={weather} alt="" />
                                </div>
                                <h4 style={{ paddingTop: "20px" }}>Calculate weather</h4>
                                <p className="alignleft">Lorem ipsum dolor sit amet consecetur adipisicing elit. Explicabo aspernatur animi amet velit.</p>
                            </div>
                        </div>
                        <div class="col-sm home2 ms-3">
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <div style={{ height: "50px", width: "50px", border: "1px solid #FAA935", borderRadius: "50%", backgroundColor: "#FAA935" }}>
                                    <img style={{ height: "40px", maxWidth: "100%" }} src={plugins} alt="" />
                                </div>
                                <h4 style={{ paddingTop: "20px" }}>Best tour guide</h4>
                                <p className="alignleft">Lorem ipsum dolor sit amet consecetur adipisicing elit. Explicabo aspernatur animi amet velit.</p>
                            </div>
                        </div>
                        <div class="col-sm home2 ms-3">
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <div style={{ height: "50px", width: "50px", border: "1px solid #FAA935", borderRadius: "50%", backgroundColor: "#FAA935" }}>
                                    <img style={{ height: "40px", maxWidth: "100%" }} src={sstings} alt="" />
                                </div>
                                <h4 style={{ paddingTop: "20px" }}>Customization</h4>
                                <p className="alignleft">Lorem ipsum dolor sit amet consecetur adipisicing elit. Explicabo aspernatur animi amet velit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            {/* Tour Travel sectio */}

            {/*  */}
            <Tours_list />
            {/*  */}

            {/* 4th section */}
            {/*  */}
            <div>
                <div className="container mt-5 border-0">
                    <div className="row">
                        <div class="col-sm">
                            <div>
                                <div>
                                    <div style={{ backgroundColor: "#FAA935", border: "1px solid #FAA935", borderRadius: "20px", width: "100px" }}><p className="hometravelsectiondivp pt-2">Experience</p></div>
                                </div>
                                <h1 style={{ textAlign: "left" }} className="pt-3">With our All experience we will serve you</h1>
                                <p style={{ textAlign: "left" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis iure molestiae dolorem, repellendus blanditiis</p>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <div className="experiencebutton" style={{ marginLeft: '10px' }}><h6 className="experiencebuttonp pt-4 ms-3">12k+</h6></div>
                                    <h6 style={{ textAlign: "left" }} className="pt-3">Successfull Trips</h6>
                                </div>
                                <div className="col-sm">
                                    <div className="experiencebutton" style={{ marginLeft: '10px' }}><h6 className="experiencebuttonp pt-4 ms-3">2k+</h6></div>
                                    <h6 style={{ textAlign: "left" }} className="pt-3">Regular clients</h6>
                                </div>
                                <div className="col-sm">
                                    <div className="experiencebutton" style={{ marginLeft: '10px' }}><h6 className="experiencebuttonp pt-4 ms-3">15</h6></div>
                                    <h6 style={{ textAlign: "left" }} className="pt-3">Years experience</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm ms-5">
                            <div>
                                <img src={experience} style={{ height: "400px", width: "auto" }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
            {/* Slider */}
            {/*  */}

            <div className="container border-0 mt-5">
                <div style={{ backgroundColor: "#FAA935", border: "1px solid #FAA935", borderRadius: "20px", width: "100px" }}><p className="hometravelsectiondivp pt-2">Clients love</p></div>
            </div>
            <div className="container border-0">
                <h1 style={{ color: "black", fontWeight: "500" }}>What our clients say about us</h1>
            </div>
            <div className="container border-0 mb-5">
                <div className="row">
                    <div className="col-sm">
                        <div>
                            <p className="avap">Lorem ipsum dolor sit amet consecteturs adipisicing elit. Perspiciatis, nemo! velit facilis magni ab, animi odio vitae! Numquam odit, tempora soluta, sequi est illum fagiat magni earum repudiandae laudantium voluptatum!</p>
                        </div>
                        <div className="row">
                            <div className="col-sm"> <img style={{ borderRadius: "5px" }} src={ava1} className="avaimg" /></div>
                            <div className="col-sm mt-3">
                                <h4 className=" namefd">Jhon deo</h4>
                                <p className=" namefd">Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div>
                            <p className="avap">Lorem ipsum dolor sit amet consecteturs adipisicing elit. Perspiciatis, nemo! velit facilis magni ab, animi odio vitae! Numquam odit, tempora soluta, sequi est illum fagiat magni earum repudiandae laudantium voluptatum!</p>
                        </div>
                        <div className="row">
                            <div className="col-sm"> <img style={{ borderRadius: "5px" }} src={ava2} className="avaimg" /></div>
                            <div className="col-sm mt-3">
                                <h4 className=" namefd">Cathrine Jo</h4>
                                <p className=" namefd">Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div>
                            <p className="avap">Lorem ipsum dolor sit amet consecteturs adipisicing elit. Perspiciatis, nemo! velit facilis magni ab, animi odio vitae! Numquam odit, tempora soluta, sequi est illum fagiat magni earum repudiandae laudantium voluptatum!</p>
                        </div>
                        <div className="row">
                            <div className="col-sm"> <img style={{ borderRadius: "5px" }} src={ava3} className="avaimg" /></div>
                            <div className="col-sm mt-3">
                                <h4 className=" namefd">Peter Alice</h4>
                                <p className=" namefd">Customer</p>
                            </div>
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
                                <div style={{ backgroundColor: "white", height: "60px", marginTop: "20px", borderRadius: "15px" }}>
                                    <input style={{ height: "100%", width: "80%", border: "0", outline: "0", borderRadius: "20px" }} type="text" placeholder="Enter your email" />
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
            {/* Footer section */}
            {/*  */}
            <div className="container-fluid my-5">
                <Footer />
            </div>
        </div >
    )
}
export default Home