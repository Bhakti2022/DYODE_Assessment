import React from "react";
import "./sliderHero.css";

const SliderHero = ({ data }) => {
  return (
    <div className="sliderHero">
      <img src={`images/${data.img_name}.jfif`} alt="" />
      <div className="sliderHero_Text">
        <h1
          style={{ color: `${data.text_color}` }}
          className="slideHero_heading"
        >
          {data.heading}
        </h1>
        <p style={{ color: `${data.text_color}` }}>{data.description}</p>
        <button className="slideHero_button">SHOP NOW</button>
      </div>
    </div>
  );
};

export default SliderHero;
