import React from 'react'
import './Tours.css'
// Images
import AllTours from "./tour.jpg"
//
import Footer from '../../Footer/Footer'
import Tours_list from '../../Tours_List/Tours_list'
import Subscribe_email from '../../Subscribe_email/Subscribe_email'
import Search_section from '../../Serach_section/Search_section'

const Tours = () => {
  return (
    <div>
      <div className='container-fluid'>
        <img className="AllTourImage" src={AllTours} />
        <h1 class="centered">All Tours</h1>
      </div>
        {/* Search section */}
        {/*  */}
            <Search_section/>
        {/*  */}
        {/* Tour Travel sectio */}
        {/*  */}
            <Tours_list/>
        {/*  */}
        {/* EMAIL section */}
            <Subscribe_email/>
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
