import React, { useState } from "react";
import { CgMenuRound } from "react-icons/cg";
import { GiCancel } from "react-icons/gi";
import "./NavBar.css";

import { BiSearch } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import useWindowDimensions from "../customHooks/useWindowDimension";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const { width } = useWindowDimensions();
  if (width > 800) {
    if (!isOpen) {
      setIsOpen(true);
    }
  }

  return (
    <div className="navBar">
      <div className="nav_left">
        <div className="navLogo">
          <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <GiCancel /> : <CgMenuRound />}
          </div>

          <img
            src="https://s3-alpha-sig.figma.com/img/d3f7/4826/0edc0e553d1c270913a4ea35a983030f?Expires=1647216000&Signature=EJ2jd0JUC6ux-s6ANV4mVR0ij8UyFrAkqNn8LFoDEqXMcwh1lytGYcBpWtkJgwXY00yKaXJg998odsAG0ZeD-UMWPQ74X6wQL39VqEcC-k6ZeCynk~349q7q2yJwEfL-ihbcgijh8jlGUAmo9cBWW2AJf44v~2q44bdKOmjCZlAUkvD~pUPLgO6ATstxu4F7PuX0HzFxNUvmHP~VZn3Mx5D6XLDH6v~Rd0GrO1HK9n89R~0XmXjSuFuaSYYXUGx8H7x2c7zvV2rS~pyzBXkeycKcUMrCvnjtuV9n~pCqS9U-o3skPoPMDbS9Y8DREY7O1RdKk6PxBF6qv9Db6WLcNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="nav logo"
          />
        </div>

        <div className="navMenus" style={{ display: isOpen ? "flex" : "none" }}>
          <span>Men’s</span>
          <span>WOMen’s</span>
          <span>ACCESSORIES</span>
          <span>SALE!</span>
        </div>
      </div>

      <div className="navIcons">
        <BiSearch />
        <FaUser />
        <HiShoppingCart />
      </div>
    </div>
  );
};

export default NavBar;
