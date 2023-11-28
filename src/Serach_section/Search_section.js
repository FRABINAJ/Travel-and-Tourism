import React from 'react'
// search div
import searchlocation from "./searchlocation.png"
import searchdistance from "./searchdistance.png"
import people from "./people.png"
import searchicon from "./searchicon.png"

function Search_section() {
  return (
    <div>
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
    </div>
  )
}

export default Search_section
