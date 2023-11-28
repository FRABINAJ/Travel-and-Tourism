import React from 'react'
import './Section2.css'
//
import star from "./star icon.png"

function Section2() {
  return (
    <div>
      <div className='ms-4 me-4'>
                        <div style={{ display: "inline-flex" }} className='mt-5'>
                            <h2 style={{ color: "black" }}>99</h2>
                            <div style={{ display: "inline-flex" }} className='ms-2'>
                                <p className='txt-secondary'>/Per person</p>
                                <img className='star2' src={star} alt="" />
                                <p className='txt-secondary'>(0)</p>
                            </div>
                        </div>
                        <hr style={{ marginTop: "-5px" }} />
                        {/*  */}
                        <h4 className='mt-5'>Information</h4>
                        <div className='border container-fluid'>
                            <div>
                                <input type="text" placeholder='Full Name' className='inputclass txt-secondary' />
                                <hr style={{ marginTop: "0.1rem", marginBottom: "1rem" }} />
                            </div>
                            <div>
                                <input type="number" placeholder='Phone number' className='inputclass txt-secondary' />
                                <hr style={{ marginTop: "0.1rem", marginBottom: "1rem" }} />
                            </div>
                            <div style={{ display: "inline-flex" }}>
                                <div style={{ width: "40%" }}>
                                    <input type="date" name="trip-start" min="2018-01-01" max="2025-12-31" placeholder='dd-mm-yy' className='inputclass txt-secondary' />

                                </div>
                                <div style={{ width: "40%" }}>
                                    <input type="number" placeholder='Number of Guest' className='inputclass txt-secondary' />

                                </div>
                                <hr style={{ marginTop: "0.5rem", marginBottom: "1rem" }} />
                            </div>
                        </div>
                        {/*  */}
                        <div className='mt-5'>
                            <div style={{ display: "flex" }}>
                                <h5 className='txt-secondary'>99 x 1 person </h5>
                                <h5 className='txt-secondary' style={{ marginLeft: "auto" }}>99</h5>
                            </div>
                            <div style={{ display: "flex" }} className='mt-3'>
                                <h5 className='txt-secondary'>Service Charges</h5>
                                <h5 className='txt-secondary' style={{ marginLeft: "auto" }}>10</h5>
                            </div>
                            <div style={{ display: "flex" }} className='mt-3'>
                                <h4 style={{ color: "black", fontWeight: "700" }}>Total</h4>
                                <h4 style={{ marginLeft: "auto", color: "black", fontWeight: "700" }}>109</h4>
                            </div>
                            <button className='mt-5 btn booknowbtn'>Book Now</button>

                        </div>


                    </div>
    </div>
  )
}

export default Section2
