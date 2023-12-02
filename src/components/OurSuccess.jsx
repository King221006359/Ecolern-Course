import React from "react";
import SuccessCard from "./SuccessCard";
import { OurSuccessData } from "./data/Data";

function Oursuccess(sucess) {
  return (
    <SuccessCard
      key={sucess.id}
      title={sucess.title}
      content={sucess.content}
      bottom={sucess.bottom}
    />
  );
}

function OurSuccess() {
  return (
    <div className="our-success-section">
      <div className="our-success-container">
        <div className="our-success-header">
          <h1>Our Success</h1>
          <div className="our-success-header-content">
            <p>
              Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
              sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
              ultrices eu ornare tristique vel nisl orci.
            </p>
          </div>
        </div>
        <div className="our-success-card-container">
          {OurSuccessData.map(Oursuccess)}
        </div>
      </div>
    </div>
  );
}

export default OurSuccess;
