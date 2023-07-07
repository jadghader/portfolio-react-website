import React from "react";
import "../styles/HeroImgStyles.css";
import IntroImg from "../assets/h1.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi I'm Jad Ghader</p>
        <h1>Full Stack Developer</h1>
        <div>
          <Link to="/project" className="btn">
            {" "}
            Projects
          </Link>
          <Link to="/contact" className="btn-light">
            {" "}
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
