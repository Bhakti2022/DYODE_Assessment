import React from "react";
import "./categoryHero.css"

const CategoryHero = ({ category }) => {
  return (
    <div className={`categoryHero ${category.className}`}>
      <img src={`images/${category.img_name}.jfif`} alt="categoryImage" />
      <div className="categoryHero_heading">
        <h3>{category.name}</h3>
      </div>
    </div>
  );
};

export default CategoryHero;
