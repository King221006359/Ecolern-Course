// import React from "react";
// import '../components/courses/courses.css';
import NavBar from "../components/NavbarHome/NavBar";
import CourseWelcome from "../components/courses/CourseWelcome"
import Menus from "../components/Menus/Menus"
import Reviews from "../components/Reviews/Reviews"
import Footer from '../components/Footer/Footer';




function Reviewspage() {
  return (
    <div className="content">
      <NavBar />
      <CourseWelcome />
      <div className="course-card-container">
       
      </div>
      <Menus /><br />
      <Reviews /><br /><br />
      <Footer />


    </div>
  );
}

export default Reviewspage;

