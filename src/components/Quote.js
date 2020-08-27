import React from "react";
import "../css/Card.css";

const Quote = ({ quote }) => {
  console.log(quote);
  return (
    <div className="card-wrapper quote-wrapper">
      <div className="card">
        <div className="card-content">
          <p>"{quote}"</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
