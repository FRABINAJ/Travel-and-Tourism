import React from 'react'
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
//

function Tours_list() {
    function ala() {
        alert("Create an account")
    }
  return (
    <div>
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
    </div>
  )
}

export default Tours_list
