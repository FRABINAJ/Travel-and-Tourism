import React from 'react'
import './Tours.css'
import AllTours from "./tour.jpg"

const Tours = () => {
  return (
    <div>
      <div className='container-fluid'>
        <img className="AllTourImage" src={AllTours} />
        <h1 class="centered">All Tours</h1>
      </div>
    </div>
  )
}

export default Tours
