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
          <h1>Meet the team!</h1>
          <div className="slide-in">
            <div className="about-us-container">
              <div className="about-member-container">
                <img src="https://i.imgur.com/eERTURq.jpg" alt="nopic" />
                <div className="about-member">
                  <h3>David Lai</h3>                  <p>Likes: Debugging</p>
                  <p>Dislikes: Bugs</p>
                  <div className="about-links">
                    <a
                      href="https://www.linkedin.com/in/davidlai9/"
                    >
                      <FaLinkedin size={40} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a href="https://github.com/dtlai">
                      <FaGithub size={40} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="about-member-container">
                <img src="https://i.imgur.com/e1bOMcZ.jpg" alt="nopic" />
                <div className="about-member">
                  <h3>Nathan Luu</h3>
                  <p>Likes: Korean BBQ</p>
                  <p>Dislikes: Ahgassi Gopchang</p>
                  <div className="about-links">
                    <a
                      href="https://www.linkedin.com/in/nathan-luu/"
                    >
                      <FaLinkedin size={40} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a href="https://github.com/nateluu28" >
                      <FaGithub size={40} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="about-member-container">
                <img src="https://i.imgur.com/imgjsHC.jpg" alt="nopic" />
                <div className="about-member">
                  <h3>Linda Xiao</h3>
                  <p>Likes: Dogs</p>
                  <p>Dislikes: Dogs who wake up early</p>
                  <div className="about-links">
                    <a
                      href="https://www.linkedin.com/in/lindaxiao/"
                    >
                      <FaLinkedin size={40} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a href="https://github.com/Lindax28">
                      <FaGithub size={40} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="about-member-container">
                <img src="https://i.imgur.com/wn8QQ9o.jpg" alt="nopic" />
                <div className="about-member">
                  <h3>Michael Lau</h3>
                  <p>Likes: New Valorant skins</p>
                  <p>Dislikes: Old Valorant skins</p>
                  <div className="about-links">
                    <a
                      href="https://www.linkedin.com/in/michael-lau-38407119b/"
                    >
                      <FaLinkedin size={40} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a href="https://github.com/michaellau4" >
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
