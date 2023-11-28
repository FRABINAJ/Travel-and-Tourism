import React from 'react'
//
import Footer from '../../Footer/Footer'
import Image_gallery from "../../Image_gallary/Image_gallery";
import Subscribe_email from '../../Subscribe_email/Subscribe_email';

const About = () => {
    return (
        <div>
            {/*  */}
            {/* Image Gallery */}
            {/*  */}
            <Image_gallery/>
            {/*  */}
            {/* EmailDiv */}
            {/*  */}
            <Subscribe_email/>
            {/*  */}
            {/* Footer */}
            {/*  */}
            <div className="container-fluid my-5">
              <Footer/>
            </div>
        </div>
    )
}

export default About
