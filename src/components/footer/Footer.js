import React, { useState } from "react";

import "./footer.css";

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import useWindowDimensions from "../customHooks/useWindowDimension";

const Footer = () => {
  const [isOpen, setIsOpen] = useState({
    first: false,
    second: false,
  });

  const { width } = useWindowDimensions();

  if (width > 800) {
    if (!isOpen.first || !isOpen.second) {
      setIsOpen({
        first: true,
        second: true,
      });
    }
  }

  return (
    <div className="footer">
      <div className="customerCompany">
        <div className="customerCompany_text">
          <div className="customerCompany_text_header">
            <h4 className="footer_heading">Customer Service</h4>
            <button
              className="expand_button"
              onClick={() => setIsOpen({ ...isOpen, first: !isOpen.first })}
            >
              {isOpen.first ? "-" : "+"}
            </button>
          </div>
          <div style={{ display: `${isOpen.first ? "block" : "none"}` }}>
            <p>Accessibility</p>
            <p>Contact Us</p>
            <p>Return Policy</p>
            <p>FAQ</p>
            <p>Gift Certificates</p>
            <p>Wishlist</p>
          </div>
        </div>
        <div className="customerCompany_text">
          <div className="customerCompany_text_header">
            <h4 className="footer_heading">Company</h4>
            <button
              className="expand_button"
              onClick={() => setIsOpen({ ...isOpen, second: !isOpen.second })}
            >
              {isOpen.second ? "-" : "+"}
            </button>
          </div>

          <div style={{ display: `${isOpen.second ? "block" : "none"}` }}>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Affiliates</p>
          </div>
        </div>
      </div>
      <div className="followUs">
        <h4 className="footer_heading">Follow Us</h4>
        <div className="footer_icons">
          <FaFacebookF />
          <AiOutlineInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
