import React from "react";
import "./navbar.scss";
import LoginModal from "../session/login_modal";
import SignupModal from "../session/signup_modal";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.loginContainer = this.loginContainer.bind(this);
    this.logoutContainer = this.logoutContainer.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  loginContainer () {
    let firstName = this.props.currentUser.firstName;
    let lastName = this.props.currentUser.lastName;

    return (
      <div>
        <span>Welcome {firstName} {lastName}!</span>
        <button 
        className="session-button"
        onClick={this.logoutUser}
        >
        Logout
        </button>
      </div>
    )
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
          <img src="https://i.imgur.com/6kB2aFR.png" alt="Ride Along Logo" />

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