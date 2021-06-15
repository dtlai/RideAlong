import React from "react";
import "./navbar.scss";
import LoginModal from "../session/login_modal";
import SignupModal from "../session/signup_modal";

function NavBar () { 

  return (
    <div className="nav-bar">
      <ul className="nav-links">
      <img src="images/boxcar_12.png" alt="Ride Along Logo" />

        <li><a href="#">About Us</a></li>
      </ul>
      <div className="modals">
        <SignupModal />
        <LoginModal />
      </div>
    </div>
  )
}

export default NavBar