import React from 'react'
import "./style.css"
//
import img1 from "./tour-img04.jpg"
import star from "./star icon.png"
import contact from "./contact.png"
import location from "./location.png"
import coin from "./coin.png"
import arrival from "./arrival.png"
import people from "./people.png"
//
import Footer from '../Footer/Footer'
import Section2 from './Section2/Section2'
import Review from './Review_section/Review'
// 
function Phuket() {
  return (
    <div className=' mt-5 ms-5 me-5'>
            <div className='row container-fluid'>
                {/* First div */}
                <div className='col-md-8 container-fluid  scrollable-content' >
                    <div className='mb-5'>
                        <img className='image img-fluid' src={img1} alt="" />
                    </div>
                    <div className='container-fluid border div'>
                        <h2 className='mt-2'>Beautifull Sunrise Thailand</h2>
                        <div className='row mt-3'>
                            <div className='col-md-3 col-sm-6' style={{ display: "inline-flex" }}>
                                <img className='star' src={star} alt="error" />
                                <p className='txt-secondary ms-3'>Not rated</p>
                            </div>
                            <div className='col-md-6 col-sm-6' style={{ display: "inline-flex" }}>
                                <img className='star' src={contact} alt="" />
                                <p className='txt-secondary ms-3'>Somewere in Phuket</p>
                            </div>
                        </div>
                        {/*  */}
                        <div className='row img-fluid'>
                            <div className='col-md-3 col-sm-6' style={{ display: "inline-flex" }}>
                                <img className='star' src={location} alt="" />
                                <p className='txt-secondary ms-3'>Phuket</p>
                            </div>
                            <div className='col-md-3 col-sm-6' style={{ display: "inline-flex" }}>
                                <img className='star' src={coin} alt="" />
                                <p className='txt-secondary ms-3'>99 person</p>
                            </div>
                            <div className='col-md-3 col-sm-6' style={{ display: "inline-flex" }}>
                                <img className='star' src={arrival} alt="" />
                                <p className='txt-secondary ms-3'>500 k/m</p>
                            </div>
                            <div className='col-md-3 col-sm-6' style={{ display: "inline-flex" }}>
                                <img className='star' src={people} alt="" />
                                <p className='txt-secondary ms-3'>8 People</p>
                            </div>
                        </div>
                        <h3 className='txt-secondary mt-2'>Description</h3>
                        <p>This is the description</p>
                    </div>
                    {/*  */}
                    <div className='container-fluid border mt-5 div '>
                        <Review />
                    </div>
                </div>
                {/* SECTION 2 */}
                <div className='col-md-4 container-fluid border' style={{ position: "sticky", top: "0", height: "100vh", overflowY: "auto" }}>
                    <Section2 />
                </div>
            </div>
            <Footer />
        </div >
  )
}

export default Phuket
