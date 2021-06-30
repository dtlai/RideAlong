import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import { FaGithub } from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="footer-items-container">
          <div className="menu-container">
            <p>MENU</p>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/posts/create">Create Post</Link>
          </div>

          <div className="follow-container">
            <p>FOLLOW</p>
            <a href = "https://github.com/dtlai/RideAlong"
              target = "_blank" 
              rel="noreferrer"><FaGithub size="1.2em" />&nbsp;Github</a>
            <Link to="/about">About Us</Link>
          </div>

          <div className="get-started-container">
            <p>GET STARTED</p>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
          <div>
            <img
              src="https://i.imgur.com/vscAchT.png"
              alt="Ride Along Logo"
            />
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;