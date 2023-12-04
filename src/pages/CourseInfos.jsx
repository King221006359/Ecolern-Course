// import React from "react";
// import '../components/courses/courses.css';
import NavBar from "../components/NavbarHome/NavBar";
import CourseWelcome from "../components/courses/CourseWelcome"
// import CourseCard from "../components/CourseCard";
import Footer from '../components/Footer/Footer';
// import CourseCard from "../components/CourseCard";
// import { CourseData } from "../components/data/Data";



function CourseInfos() {
  return (
    <div>
      <NavBar />
      <CourseWelcome />
      <div className="course-card-container">
    
      </div>
      <Footer />


    </div>
  );
}

export default CourseInfos;

