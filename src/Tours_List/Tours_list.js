import React from 'react'
// Tour travel
import tourimg1 from "./tour-img01.jpg"
import tourimg2 from "./tour-img02.jpg"
import tourimg3 from "./tour-img03.jpg"
import tourimg4 from "./tour-img04.jpg"
import tourimg5 from "./tour-img05.jpg"
import tourimg6 from "./tour-img06.jpg"
import tourimg7 from "./tour-img07.jpg"
import tourimg8 from "./tour-img08.jpg"
import staricon from "./star icon.png"
import loc from "./loc.png"
//
import "./Tour_list.css"
import { Link } from "react-router-dom"

function Tours_list() {
    function ala() {
        alert("Create an account")
    }
    return (
        <div>
            <div id='tourid' className="container mt-5 mb-5 border-0">
                <div class="row">
                    <div class="col-sm-3">
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
                            <Link style={{ color: "black" }} to="/Bangkok"> <h4 id='titles'>Snowy Mountains, Thailand</h4></Link>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <h4 style={{ color: "grey" }}><font style={{ color: "orange" }}>$990</font>/per person</h4>
                            <button style={{ backgroundColor: "orange", color: "white" }} className="btn ms-2" onClick={ala}>Book now</button>
                        </div>
                    </div>
                    <div class="col-sm-3">
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
                        <Link style={{ color: "black" }} to="/Tokyo"><h4 id='titles'>Cherry Blosoms Spring</h4></Link>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <h4 style={{ color: "grey" }}><font style={{ color: "orange" }}>$99</font>/per person</h4>
                            <button style={{ backgroundColor: "orange", color: "white" }} className="btn ms-2" onClick={ala}>Book now</button>
                        </div>
                    </div>
                    <div class="col-sm-3">
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
                        <Link style={{ color: "black" }} to="/Bali"><h4 id='titles'>Bali, Indonasia</h4></Link>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <h4 style={{ color: "grey" }}><font style={{ color: "orange" }}>$99</font>/per person</h4>
                            <button style={{ backgroundColor: "orange", color: "white" }} className="btn ms-2" onClick={ala}>Book now</button>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div>
                            <img src={tourimg7} alt="tourimg1" className="tourimg" style={{ width: "100%" }} />
                            {/* <div style={{ background: "orange", color: "white" }}>Featured</div> */}
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <img src={loc} alt="" className="tourloc ms-1" />
                            <p style={{ fontWeight: "600" }}>Paris</p>
                            <img src={staricon} alt="staricon" className="starIcon ms-5 mt-1" />
                            <p className="ms-2">Not rated</p>
                        </div>
                        <div>
                        <Link style={{ color: "black" }} to="/Paris"><h4 id='titles'>Holmen Lofoten,france</h4></Link>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <h4 style={{ color: "grey" }}><font style={{ color: "orange" }}>$99</font>/per person</h4>
                            <button style={{ backgroundColor: "orange", color: "white" }} className="btn ms-2" onClick={ala}>Book now</button>
                        </div>
                    </div>

                    <div class="w-100 mt-5"></div>

                    <div class="col-sm-3">
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
                        <Link style={{ color: "black" }} to="/Phuket"><h4 id='titles'>Beautifull Sunrise Thailand</h4></Link>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <h4 style={{ color: "grey" }}><font style={{ color: "orange" }}>$99</font>/per person</h4>
                            <button style={{ backgroundColor: "orange", color: "white" }} className="btn ms-2" onClick={ala}>Book now</button>
                        </div>
                    </div>
                    <div class="col-sm-3">
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
                        <Link style={{ color: "black" }} to="/London"><h4 id='titles'>Westminister Bridge</h4></Link>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <h4 style={{ color: "grey" }}><font style={{ color: "orange" }}>$99</font>/per person</h4>
                            <button style={{ backgroundColor: "orange", color: "white" }} className="btn ms-2" onClick={ala}>Book now</button>
                        </div>
                    </div>
                    <div class="col-sm-3">
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
                        <Link style={{ color: "black" }} to="/Bali2"><h4 id='titles'>Nusa Pendia Bali, Indonasia</h4></Link>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <h4 style={{ color: "grey" }}><font style={{ color: "orange" }}>$99</font>/per person</h4>
                            <button style={{ backgroundColor: "orange", color: "white" }} className="btn ms-2" onClick={ala}>Book now</button>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div>
                            <img src={tourimg8} alt="tourimg1" className="tourimg" style={{ width: "100%" }} />
                            {/* <div style={{ background: "orange", color: "white" }}>Featured</div> */}
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <img src={loc} alt="" className="tourloc ms-1" />
                            <p style={{ fontWeight: "600" }}>Canada</p>
                            <img src={staricon} alt="staricon" className="starIcon ms-5 mt-1" />
                            <p className="ms-2">Not rated</p>
                        </div>
                        <div>
                        <Link style={{ color: "black" }} to="/Canada"><h4 id='titles'>Nayagra Waterfalls</h4></Link>
                        </div>
                        <div style={{ display: "inline-flex" }}>
                            <h4 style={{ color: "grey" }}><font style={{ color: "orange" }}>$990</font>/per person</h4>
                            <button style={{ backgroundColor: "orange", color: "white" }} className="btn ms-2" onClick={ala}>Book now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tours_list
