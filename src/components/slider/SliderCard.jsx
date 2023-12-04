import React from "react";

function SliderCard(props) {
  return (
    <div className="slider-card-content">
      <div className="slider-card-image">
        <img src={props.image} alt="slider-image" />
      </div>
      <div className="slider-title">
        <h3>{props.title}</h3>
      </div>
      <div className="slider-content">
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default SliderCard;
