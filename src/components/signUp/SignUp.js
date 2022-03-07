import React from "react";
import "./signUp.css"
import { IoIosMail } from "react-icons/io";

const SignUp = () => {
  return (
    <div className="SignUp">
      <div className="signUp_heading">
        <IoIosMail />
        <h2>Sign Up & Stay Connected</h2>
      </div>
      <div className="signUp_body">
        <p className="signUp_body_left">
          Sign up for the newsletter and get 20% off! Gain access to exclusive
          offers and be the first to know when new stuff drops!
        </p>
        <div className="signUp_body_right">
          <input type="text" placeholder="Enter Your Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
