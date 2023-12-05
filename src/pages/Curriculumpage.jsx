// import React from "react";
// import '../components/courses/courses.css';
import NavBar from "../components/NavbarHome/NavBar";
import CourseWelcome from "../components/courses/CourseWelcome"
import Menus from "../components/Menus/Menus"
import Curriculum from "../components/Curriculum/Curriculum"
import Footer from '../components/Footer/Footer';




function Curriculumpage() {
  return (
    <div className="content">
      <NavBar />
      <CourseWelcome />
      <div className="course-card-container">
       
      </div>
      <Menus /><br />
      <Curriculum /><br /><br />
      <Footer />


    </div>
  );
}

export default Curriculumpage;

