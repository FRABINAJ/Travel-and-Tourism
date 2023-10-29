import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img className="navbar-brand" src="https://www.achieversit.com/assets/images/logo-white.png" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/home" className={`nav-item nav-link ${activeLink === "home" ? "active" : ""}`} onClick={() => handleClick("home")}>Home</Link>
            <Link to="/about" className={`nav-item nav-link ${activeLink === "about" ? "active" : ""}`} onClick={() => handleClick("about")}>About</Link>
            <Link to="/tours" className={`nav-item nav-link ${activeLink === "tours" ? "active" : ""}`} onClick={() => handleClick("tours")}>Tours</Link>
            <Link to="/login" className={`nav-item nav-link ${activeLink === "login" ? "active" : ""}`} onClick={() => handleClick("login")}>Login</Link>
            <Link to="/register" className={`nav-item nav-link ${activeLink === "register" ? "active" : ""}`} onClick={() => handleClick("register")}>Register</Link>
          </div>
        </div>
      </nav >
    </div >
  )
}

export default Header;
