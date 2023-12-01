import React from "react";

function FrequentSection() {
  return (
    <section className="frequent-question-section">
      <div className="frequent-container">
        <div className="frequent-left-side">
          <h1>Frequently Asked Questions</h1>
          <p>
            Still you have any questions? Contact our Team via
            support@skillbridge.com
          </p>
          <button className="frequent-button">See All FAQ's</button>
        </div>
        <div className="frequent-rigth-side">
          <div className="frequent-card-container">
             <div className="frequent-card-one">
              <div className="enroll-multiple">
                <p>Can I enroll in multiple courses at once?</p>
                <div className="close-button">X</div>
              </div>
              <p>Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</p>
              <div className="enroll-process">
                <p>Enrollment Process for Different Courses</p>
                <div className="right-arrow">-</div>
              </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FrequentSection;
