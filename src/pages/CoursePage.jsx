// import React from "react";
// import '../components/courses/courses.css';
import NavBar from "../components/NavbarHome/NavBar";
import CourseWelcome from "../components/courses/CourseWelcome"
// import CourseCard from "../components/CourseCard";
import Footer from '../components/Footer/Footer';
import CourseCard from "../components/CourseCard";
import { CourseData } from "../components/data/Data";

function Courses(course) {
  return (
    <CourseCard
      key={course.id}
      image={course.image}
      time={course.time}
      level={course.level}
      author={course.author}
      title={course.title}
      description={course.description}
    />
  );
}

function CoursePage() {
  return (
    <div>
      <NavBar />
      <CourseWelcome />
      <div className="course-card-container">
      <div className="course-container">{CourseData.map(Courses)}</div>
      </div>
      <Footer />


    </div>
  );
}

export default CoursePage;

