import React from "react";
import { Route, Routes} from 'react-router-dom'
import { useState } from "react";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Tours from "../Pages/Tours/Tours";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
// 
import Bangkok from "../Tours_page/Bangkok";
import Tokyo from "../Tours_page/Tokyo";
import Bali from "../Tours_page/Bali";
import Paris from "../Tours_page/Paris"
import Phuket from "../Tours_page/Phuket";
import London from "../Tours_page/London";
import Bali2 from "../Tours_page/Bali2";
import Canada from "../Tours_page/Canada";
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
                {/*  */}
                <Route path="bangkok" element={<Bangkok/>}/>
                <Route path="tokyo" element={<Tokyo/>}/>
                <Route path="bali" element={<Bali/>}/>
                <Route path="paris" element={<Paris/>}/>
                <Route path="phuket" element={<Phuket/>}/>
                <Route path="london" element={<London/>}/>
                <Route path="bali2" element={<Bali2/>}/>
                <Route path="canada" element={<Canada/>}/>

            </Routes>
        </div>
    )
}
export default Routing