import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./about_us.scss";

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <NavBarContainer />
        <div className="about-us-page">
          <div className="slide-in">
            <div className="about-us-container">
              <div className="about-member-container">
                <img src="https://i.imgur.com/eERTURq.jpg" alt="nopic" />
                <div className="about-member">
                  <p>David Lai</p>
                  <div className="about-links">
                    <a
                      href="https://www.linkedin.com/in/davidlai9/"
                      target="_blank"
                    >
                      <FaLinkedin size={40} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a href="https://github.com/dtlai" target="_blank">
                      <FaGithub size={40} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="about-member-container">
                <img src="https://i.imgur.com/e1bOMcZ.jpg" alt="nopic" />
                <div className="about-member">
                  <p>Nathan Luu</p>
                  <div className="about-links">
                    <a
                      href="https://www.linkedin.com/in/nathan-luu/"
                      target="_blank"
                    >
                      <FaLinkedin size={40} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a href="https://github.com/nateluu28" target="_blank">
                      <FaGithub size={40} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="about-member-container">
                <img src="https://i.imgur.com/imgjsHC.jpg" alt="nopic" />
                <div className="about-member">
                  <p>Linda Xiao</p>
                  <div className="about-links">
                    <a
                      href="https://www.linkedin.com/in/lindaxiao/"
                      target="_blank"
                    >
                      <FaLinkedin size={40} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a href="https://github.com/Lindax28" target="_blank">
                      <FaGithub size={40} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="about-member-container">
                <img src="https://i.imgur.com/wn8QQ9o.jpg" alt="nopic" />
                <div className="about-member">
                  <p>Michael Lau</p>
                  <div className="about-links">
                    <a
                      href="https://www.linkedin.com/in/michael-lau-38407119b/"
                      target="_blank"
                    >
                      <FaLinkedin size={40} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a href="https://github.com/michaellau4" target="_blank">
                      <FaGithub size={40} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;
