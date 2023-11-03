import React from "react";
import { Route, Routes} from 'react-router-dom'
import { useState } from "react";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Tours from "../Pages/Tours/Tours";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
const Routing=()=>{
    const [activeLink, setActiveLink] = useState("home");
    return(
        <div>
            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="tours" element={<Tours/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Routes>
        </div>
    )
}
export default Routing