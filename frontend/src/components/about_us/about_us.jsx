import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./about_us.scss";

class AboutUs extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    return (
      <>
        <div className="about-us-page">
          <div className="slide-in">
            <div className="about-us-container">
              <h1 className="about-us-item-a">Meet the Team</h1>
              <div className="about-member-container">
                <img src="https://i.imgur.com/eERTURq.jpg" alt="nopic" />
                <div className="about-member">
                  <h3>David Lai</h3>                  
                  <p>Likes: Debugging</p>
                  <p>Dislikes: Bugs</p>
                  <div className="about-links">
                    <a
                      href="https://www.linkedin.com/in/davidlai9/" target = "_blank" rel="noreferrer">
                      <FaLinkedin className="about-us-icon" size={40} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a href="https://github.com/dtlai" target = "_blank" rel="noreferrer">
                      <FaGithub className="about-us-icon" size={40} />
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
                    <a href="https://www.linkedin.com/in/nathan-luu/" target = "_blank" rel="noreferrer">
                      <FaLinkedin className="about-us-icon" size={40} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a href="https://github.com/nateluu28" target = "_blank" rel="noreferrer">
                      <FaGithub className="about-us-icon" size={40} />
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
                      href="https://www.linkedin.com/in/lindaxiao/" target = "_blank" rel="noreferrer">
                      <FaLinkedin className="about-us-icon" size={40} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a href="https://github.com/Lindax28" target = "_blank" rel="noreferrer">
                      <FaGithub className="about-us-icon" size={40} />
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
                      href="https://www.linkedin.com/in/michael-lau-38407119b/" target = "_blank" rel="noreferrer">
                      <FaLinkedin className="about-us-icon" size={40} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a href="https://github.com/michaellau4" target = "_blank" rel="noreferrer">
                      <FaGithub className="about-us-icon" size={40} />
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
