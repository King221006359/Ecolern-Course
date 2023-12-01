import React from "react";
import CourseCard from "./CourseCard";
import { CourseData } from "./data/Data";

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

function CoursesSection() {
  return (
    <section className="courses-section">
      <div className="courses-container">
        <h1>Our Courses</h1>
        <div className="courses-header">
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <div className="courses-button">
            <button className="coursebutton">View All</button>
          </div>
        </div>
        <div className="course-container">{CourseData.map(Courses)}</div>
      </div>
    </section>
  );
}

export default CoursesSection;
