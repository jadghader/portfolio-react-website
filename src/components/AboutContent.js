/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import "../styles/AboutContentStyles.css";

import React from "react";

import React1 from "../assets/react1.png";
import React2 from "../assets/react2.jpeg";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am proficient in front-end technologies such as HTML,
          CSS,JavaScript, and modern frameworks like React and Angular. I
          believe that a well-designed and responsive front end is essential in
          capturing users' attention and delivering the desired functionality.
          In addition to my front-end expertise, I am well-versed in back-end
          development, employing technologies such as Node.js, Python, and Ruby
          on Rails. I have experience in designing and implementing RESTful
          APIs, working with databases, and ensuring the security and
          scalability of web applications. What sets me apart as a full stack
          developer is my ability to seamlessly integrate the front-end and
          back-end components, creating cohesive and robust solutions. I am
          familiar with version control systems like Git and have a solid
          understanding of agile development methodologies, enabling me to
          collaborate effectively with cross-functional teams and deliver
          projects on time. As a problem-solver at heart.
        </p>
        <Link to="/contact">
          <button className="btn"> Contact </button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="false" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
