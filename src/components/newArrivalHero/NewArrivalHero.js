import React from "react";
import "./newArrivalHero.css";

const NewArrivalHero = ({ newArrival }) => {
  return (
    <div className="newArrivalHero">
      <img src={`images/${newArrival.img}.jfif`} alt="" />
      <div className="newArrival_text">
        <h6>{newArrival.title}</h6>
        <p>{newArrival.description}</p>
        <h5>
          $<span>{newArrival.price}</span>
        </h5>
      </div>
    </div>
  );
};

export default NewArrivalHero;
