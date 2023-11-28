import React from 'react'
import './Review.css'
//
import greystar from "./grey-star.png"

function Review() {
  return (
    <div>
        <h2 className='mt-2 mb-5'>Reviews (0 reviews)</h2>
        <div className='mb-5 mt-3'>
            <img className='greystar' src={greystar} alt="" />
            <img className='greystar ms-2' src={greystar} alt="" />
            <img className='greystar ms-2' src={greystar} alt="" />
            <img className='greystar ms-2' src={greystar} alt="" />
            <img className='greystar ms-2' src={greystar} alt="" />
        </div>
        <div className='mb-5'>
            <div style={{ display: 'flex', justifyContent: 'left', textAlign: "left", }}>
                <div className='container-fluid' style={{ border: "2px solid orange", borderRadius: "20px", width: "100%" }}>
                    <div style={{ backgroundColor: "white", height: "50px", marginTop: "20px", borderRadius: "30px", width: "100%" }}>
                        <input style={{ height: "70%", width: "80%", border: "0", outline: "0", borderRadius: "30px" }} type="text" placeholder="Share your thoughts" />
                        <button style={{ height: "80%", width: "15%" }} type="submit" className='subscribebutton'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review
