import React from 'react'
import "./Scroll_review.css"
//Slideer div
//
import ava1 from "./ava-1.jpg"
import ava2 from "./ava-2.jpg"
import ava3 from "./ava-3.jpg"

function Scroll_review() {
    return (
        <div>
            <div className="container border-0 mt-5">
                <div style={{ backgroundColor: "#FAA935", border: "1px solid #FAA935", borderRadius: "20px", width: "100px" }}><p className="hometravelsectiondivp pt-2">Clients love</p></div>
            </div>
            <div className="container border-0">
                <h1 style={{ color: "black", fontWeight: "500" }}>What our clients say about us</h1>
            </div>
            <div className="container border-0 mb-5">
                <div className="row">
                    <div className="col-sm">
                        <div>
                            <p className="avap">Lorem ipsum dolor sit amet consecteturs adipisicing elit. Perspiciatis, nemo! velit facilis magni ab, animi odio vitae! Numquam odit, tempora soluta, sequi est illum fagiat magni earum repudiandae laudantium voluptatum!</p>
                        </div>
                        <div className="row">
                            <div className="col-sm"> <img style={{ borderRadius: "5px" }} src={ava1} className="avaimg" /></div>
                            <div className="col-sm mt-3">
                                <h4 className=" namefd">Jhon deo</h4>
                                <p className=" namefd">Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div>
                            <p className="avap">Lorem ipsum dolor sit amet consecteturs adipisicing elit. Perspiciatis, nemo! velit facilis magni ab, animi odio vitae! Numquam odit, tempora soluta, sequi est illum fagiat magni earum repudiandae laudantium voluptatum!</p>
                        </div>
                        <div className="row">
                            <div className="col-sm"> <img style={{ borderRadius: "5px" }} src={ava2} className="avaimg" /></div>
                            <div className="col-sm mt-3">
                                <h4 className=" namefd">Cathrine Jo</h4>
                                <p className=" namefd">Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div>
                            <p className="avap">Lorem ipsum dolor sit amet consecteturs adipisicing elit. Perspiciatis, nemo! velit facilis magni ab, animi odio vitae! Numquam odit, tempora soluta, sequi est illum fagiat magni earum repudiandae laudantium voluptatum!</p>
                        </div>
                        <div className="row">
                            <div className="col-sm"> <img style={{ borderRadius: "5px" }} src={ava3} className="avaimg" /></div>
                            <div className="col-sm mt-3">
                                <h4 className=" namefd">Peter Alice</h4>
                                <p className=" namefd">Customer</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Scroll_review
