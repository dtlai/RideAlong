import React from "react";
import NavBar from "../nav_bar/nav_bar";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./about_us.scss"

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="about-us-page">
          <div className="slide-in">
            <div className="about-us-container">
              <div className="about-member">
                <img src="https://i.imgur.com/eERTURq.jpg" alt="nopic" />
                <p>David Lai</p>
                <div className="about-david-linkedin">
                  <a
                    href="https://www.linkedin.com/in/davidlai9/"
                    target="_blank"
                  >
                    <FaLinkedin size={40} />
                  </a>
                </div>
                <div className="about-david-github">
                  <a href="https://github.com/dtlai" target="_blank">
                    <FaGithub size={40} />
                  </a>
                </div>
              </div>
              <div className="about-member">
                <img src="https://i.imgur.com/e1bOMcZ.jpg" alt="nopic" />
                <p>Nathan Luu</p>
                <div className="about-nate-linkedin">
                  <a
                    href="https://www.linkedin.com/in/nathan-luu/"
                    target="_blank"
                  >
                    <FaLinkedin size={40} />
                  </a>
                </div>
                <div className="about-nate-github">
                  <a href="https://github.com/nateluu28" target="_blank">
                    <FaGithub size={40} />
                  </a>
                </div>
              </div>
              <div className="about-member">
                <img src="https://i.imgur.com/imgjsHC.jpg" alt="nopic" />
                <p>Linda Xiao</p>
                <div className="about-linda-linkedin">
                  <a
                    href="https://www.linkedin.com/in/lindaxiao/"
                    target="_blank"
                  >
                    <FaLinkedin size={40} />
                  </a>
                </div>
                <div className="about-linda-github">
                  <a href="https://github.com/Lindax28" target="_blank">
                    <FaGithub size={40} />
                  </a>
                </div>
              </div>
              <div className="about-member">
                <img src="https://i.imgur.com/wn8QQ9o.jpg" alt="nopic" />
                <p>Michael Lau</p>
                <div className="about-michael-linkedin">
                  <a
                    href="https://www.linkedin.com/in/michael-lau-38407119b/"
                    target="_blank"
                  >
                    <FaLinkedin size={40} />
                  </a>
                </div>
                <div className="about-michael-github">
                  <a href="https://github.com/michaellau4" target="_blank">
                    <FaGithub size={40} />
                  </a>
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
