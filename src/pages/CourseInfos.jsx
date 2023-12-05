// import React from "react";
// import '../components/courses/courses.css';
import NavBar from "../components/NavbarHome/NavBar";
import CourseWelcome from "../components/courses/CourseWelcome"
import Menus from "../components/Menus/Menus"
import Courseinfos from "../components/Courseinfospage/Courseinfos"
import Footer from '../components/Footer/Footer';




function CourseInfos() {
  return (
    <div className="content">
      <NavBar />
      <CourseWelcome />
      <div className="course-card-container">
       
      </div>
      <Menus /><br /><br />
      <Courseinfos /><br /><br />
      <Footer />


    </div>
  );
}

export default CourseInfos;

