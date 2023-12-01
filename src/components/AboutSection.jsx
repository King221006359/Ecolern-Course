import React from "react";
import about from "../image/about.png";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-section-container">
        <div className="about-image">
          <img src={about} alt="about-image" />
        </div>
        <div className="about-content">
          <h1>About Us</h1>
          <h4>a social ecosystem of learning</h4>
          <p>
            ecolern, or electronic learning, is the delivery of learning and
            training through digital resources. Although ecolern is based on
            formalized learning, it's provided through electronic devices such
            as computers, tablets and even cellular phones that are connected to
            the internet. This makes it easy for users to learn anytime,
            anywhere, with few, if any, restrictions.
          </p>
          <div className="about-button">
            <button className="aboutButton">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
