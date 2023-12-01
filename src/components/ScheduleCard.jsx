import React from "react";

function ScheduleCard(props) {
  return (
    <>
      <div className="card">
        <div className="card-icon">
          <img src={props.icon} alt="icon" />
        </div>
        <div className="bottom">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default ScheduleCard;
