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

import Footer from '../../Footer/Footer'
import Tours_list from '../../Tours_List/Tours_list'

const Tours = () => {
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
            
            <Tours_list/>
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
    </div >
  )
}

export default Tours
