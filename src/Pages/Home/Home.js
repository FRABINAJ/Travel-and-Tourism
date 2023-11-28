import React from "react";
import './Home.css'
// Footer

//
import world from "./world.png"
//
import hero1 from "./hero-img01.jpg"
import hero3 from "./video.mp4"
import hero2 from "./hero-img02.jpg"
//
import weather from "././weather.png"
import plugins from "./guide.png"
import sstings from "./customization.png"
//
import experience from "./experience.png"
//
//Slideer div
//
import ava1 from "./ava-1.jpg"
import ava2 from "./ava-2.jpg"
import ava3 from "./ava-3.jpg"

//
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-ui-kit/css/mdb.min.css';
// emailDiv
//
import Footer from "../../Footer/Footer";
import Tours_list from "../../Tours_List/Tours_list";
import Image_gallery from "../../Image_gallary/Image_gallery";
import Subscribe_email from "../../Subscribe_email/Subscribe_email";
import Search_section from "../../Serach_section/Search_section";
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
            <Search_section />
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
            <Image_gallery />
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
            <Subscribe_email />

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