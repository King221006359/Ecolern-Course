import React from "react";

function WelcomePage() {
  return (
    <div>
      <section id="welcomePage" className="welcomePage">
        <div className="welcome-container">
          <div className="welcome">
            <div className="welcome-content">
              <h1>Interactive Video Learning</h1>
              <div className="welcome-button">
                <button className="start-learning">Start Learning</button>
                <div className="watch-video">
                  <div className="eclipse">
                    <div className="polygon"></div>
                  </div>
                  <p>Watch Intro Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WelcomePage;
