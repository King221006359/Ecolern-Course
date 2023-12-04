import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="title">
              <h2>
                eco<span className="title-span">lern</span>
              </h2>
            </div>

            <div className={`nav-elements ${showNavbar && "active"}`}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Courses">Courses</Link>
                </li>
                <li>
                  <Link to="/contact">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="login-button">
              <button className="signIn">Sign In</button>
              <button className="signUp">Sign Up</button>
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
