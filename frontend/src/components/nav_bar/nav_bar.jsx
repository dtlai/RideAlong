import React from "react";
import "./navbar.scss";
import LoginModal from "../session/login_modal";
import SignupModal from "../session/signup_modal";
import { Link } from 'react-router-dom';
import { MdGroup, MdHome } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.loginContainer = this.loginContainer.bind(this);
    this.logoutContainer = this.logoutContainer.bind(this);
    this.setDropdown = this.setDropdown.bind(this);
    this.state = {
      dropdown: false
    };
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }
  setDropdown () {
      this.setState({
        dropdown: !this.state.dropdown
      })
  }

  loginContainer () {
    let firstName = this.props.currentUser.firstName;
    let lastName = this.props.currentUser.lastName;
    
    return (
      <div>
        <div className="user-session-container">
          <button onClick={this.setDropdown} className="dropbtn">
            <img src="https://i.imgur.com/8Zs3Vg4.jpg" alt="noimage" />
          </button>
          {this.state.dropdown ? (
            <div className="user-session-content">
              <div>{firstName}</div>
              <div>{lastName}</div>
              <button className="session-button" onClick={this.logoutUser}>
                Logout
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  logoutContainer() {
    return (
      <div className="modals">
          <SignupModal />
          <LoginModal />
        </div>
    )
  }

  render() {

    let sessionButtons = (this.props.loggedIn) ? 
        this.loginContainer() : this.logoutContainer();

    return (
  
      <div className="nav-bar">
        <ul >
          <div className="logo-home-link-container">
            <Link to="/" className="logo-home-link">
              <img
                src="https://i.imgur.com/6kB2aFR.png"
                alt="Ride Along Logo"
              />
            </Link>
          </div>
        </ul>

        <div className="nav-links">
          <li>
            <Link to="/">
              <div className="nav-bar-item">
              <MdHome size="1.2em"/>
              <span>Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/posts">
              <div className="nav-bar-item">
                <FaCarSide size="1.2em"/>
                <span>Posts</span>
              </div>
            </Link>
          </li>     
          <li>
            <Link to="/">
              <div className="nav-bar-item">
                <MdGroup size="1.2em"/>
                <span>About Us</span>
              </div>
            </Link>
          </li>
        {sessionButtons}
        </div>

      </div>
    );
  }
}

export default NavBar