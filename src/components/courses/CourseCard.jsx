import React from "react";
import './course.css'
function CourseCard(props) {
  return (
    <div className="course-card-container">
      <div className="course-card-content">
        <div className="course-image">
          <img src={props.image} className="card-image" />
        </div>
        <div className="course-duration">
          <div className="time">
            <div className="course-time">
              <p>{props.time}</p>
            </div>
          </div>
          <div className="level">
            <div className="course-level">
              <p>{props.level}</p>
            </div>
          </div>
          <div className="creator">
            <p className="course-creator">By {props.author}</p>
          </div>
        </div>
        <div className="course-title">
          <h2>{props.title}</h2>
        </div>
        <div className="course-description">{props.description}</div>
        <button className="course-button">Get it Now</button>
      </div>
    </div>
  );
}

export default CourseCard;
