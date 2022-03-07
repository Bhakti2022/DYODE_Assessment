import React from "react";
import "./favorite.css"
const Favorite = () => {
  return (
    <div className="favorite">
      <img src={`images/newArrival.jfif`} alt="" />
      <div className="favorite_text">
        <h1>Our Favorite Tees</h1>
        <p>Everyday tees you need.</p>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default Favorite;
