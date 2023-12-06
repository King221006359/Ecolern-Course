import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Menus.css";

const Menus = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <header>
        <nav className="Navbar">
          <div className="container">

            <div className={`menus-elements ${showNavbar && "active"}`}>
              <ul>
                <li>
                  <Link to="/CourseInfos">Course infos</Link>
                </li>
                <li>
                  <Link to="/Curriculumpage">Curriculum</Link>
                </li>
                <li>
                  <Link to="/Reviewspage">Reviews</Link>
                </li>
                
              </ul>
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

export default Menus;
