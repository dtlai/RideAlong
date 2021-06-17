import React from "react";
import NavBar from "../nav_bar/nav_bar";
import { FaLinkedin, FaGithub } from "react-icons/fa";

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="about-us-container">
          <div className="about-david">
            <img src="https://i.imgur.com/xAmce3u.jpg" alt="nopic" />
            <div className="about-david-linkedin">
              <a href="https://www.linkedin.com/in/davidlai9/" target="_blank">
                <FaLinkedin size={40}/>
              </a>
            </div>
            <div className="about-david-github">
              <a href="https://github.com/dtlai" target="_blank">
                <FaGithub size={40}/>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;
