import React from "react";
import "./navbar.scss";
import LoginModal from "../session/login_modal";
import SignupModal from "../session/signup_modal";
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.loginContainer = this.loginContainer.bind(this);
    this.logoutContainer = this.logoutContainer.bind(this);
    this.state.dropdown = false;
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  loginContainer () {
    let firstName = this.props.currentUser.firstName;
    let lastName = this.props.currentUser.lastName;

    const setDropdown = () => {
      this.state.dropdown = true;
    }
    return (
      <div>
        <div className="user-session-container">
          <img src="https://i.imgur.com/8Zs3Vg4.jpg" alt="" />
          <button onClick={setDropdown()} className="dropbtn">V</button>
          <div className="user-session-content">
            <div>{firstName}</div>
            <div>{lastName}</div>
            <button className="session-button" onClick={this.logoutUser}>
              Logout
            </button>
          </div>
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
        <ul className="nav-links">
          <div className="logo-home-link-container">
            <Link to="/" classsName="logo-home-link">
              <img
                src="https://i.imgur.com/6kB2aFR.png"
                alt="Ride Along Logo"
              />
            </Link>
          </div>

          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        {sessionButtons}
      </div>
    );
  }
}

export default NavBar