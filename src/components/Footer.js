import "../styles/FooterStyles.css";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-containter">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Dohat Aaramoun</p>
              <p>Aley,Lebanon</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +9613004540
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              jadghader@hotmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            I ama passionate and dedicated full stack developer. With a strong
            foundation in both front-end and back-end development I thrive on
            challenging projects that push the boundaries of what is possible.
            In this portfolio, you will find examples of my work, showcasing my
            technical abilities and creative problem-solving skills. Each
            project reflects my commitment to excellence and my dedication to
            delivering high-quality solutions. Thank you for taking the time to
            explore my portfolio.
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/jadghader/"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/jadghader/"
              className="linkedin social"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/jadghader"
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
