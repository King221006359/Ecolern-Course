import React from "react";

function SuccessCard(props) {
  return (
    <div className="success-card">
      <div className="success-card-header">
        <h4>{props.title}</h4>
      </div>
      <div className="success-card-body">
        <h1>{props.content}</h1>
      </div>
      <div className="success-card-bottom">
        <p>{props.bottom}</p>
      </div>
    </div>
  );
}

export default SuccessCard;
