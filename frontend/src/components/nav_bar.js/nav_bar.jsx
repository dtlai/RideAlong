import React from "react";
import "./navbar.scss";
import LoginModal from "../session/login_modal";
import SignupModal from "../session/signup_modal";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    console.log(this.props.loggedIn);
    let sessionButtons = (this.props.loggedIn) ? 
        <button 
        className="session-button"
        onClick={this.logoutUser}
        >Logout</button> : (
        <div className="modals">
          <SignupModal />
          <LoginModal />
        </div>
        )


    return (
      <div className="nav-bar">
        <ul className="nav-links">
        <img src="images/boxcar_12.png" alt="Ride Along Logo" />

          <li><a href="#">About Us</a></li>
        </ul>
        {sessionButtons}
      </div>
    )
  }
}

export default NavBar