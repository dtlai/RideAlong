import React from 'react';
// import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from "react-icons/fa";


class AboutUs extends React.Component {
    render () {
        return (
          <>
            <div className="about-us-container">
              <div className="about-us-links">
                <div className="about-david">
                  <div className="about-david-linkedin">
                    <a
                      href="https://www.linkedin.com/in/davidlai9/"
                      target="_blank"
                    >
                      <FaLinkedin />
                      <p>LinkedIn</p>
                    </a>
                  </div>
                  <div className="about-david-github">
                    <a href="https://github.com/dtlai" target="_blank">
                      <FaGithub />
                      <p>Github</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
}

export default AboutUs;
