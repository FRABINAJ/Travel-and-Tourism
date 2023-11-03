import React from "react";
import './Home.css'
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
import world from "./world.png"
//
import hero1 from "./hero-img01.jpg"
import video from "./video.mp4"
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
// Section 4
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
    function ala() {
        alert("Create an account")
    }

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
                                <div style={{ paddingTop: "40px" }}>
                                    <div className="heroimg1div">
                                        <img style={{ borderRadius: "20px" }} className="heroimg" src={hero1} alt="" />
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
            <div className="container mt-5 mb-5 border-0">
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
                        <div class="col-sm">
                            <div>
                                <img src={experience} style={{ height: "300px", width: "auto" }} alt="" />
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
            {/* Footer section */}
            {/*  */}
            <div className="container-fluid my-5">
                <footer className="text-center text-lg-start text-white " style={{ backgroundColor: "white" }}>

                    <section className="row">
                        <div className="container text-center text-md-start pt-5 border-0">
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
                                        <a href="#firstsection" className="text-dark">Home </a>
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
                                        <a href="#imagegallary" className="text-dark">Gallery</a>
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
export default Home