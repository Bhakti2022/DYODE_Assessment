import React from "react";
import "./category.css"
import CategoryHero from "../categoryHero/CategoryHero";

const CATEGORIES = [
  {
    name: "Women’s",
    img_name: "womenImage",
    className: "item1"
  },
  {
    name: "Men’s",
    img_name: "menImage",
    className: "item2"

  },
  {
    name: "Accessories",
    img_name: "accessoriesImage",
    className: "item3"

  },
];
const Category = () => {
  return (
    <div className="category">
      {CATEGORIES.map((category) => (
        <CategoryHero category={category} />
      ))}
    </div>
  );
};

export default Category;
