import React from "react";
import "./navbar.scss";

function NavBar () { 

  return (
    <div className="nav-bar">
      <ul className="nav-links">
      <img src="images/boxcar_12.png" alt="Ride Along Logo" />

        <li><a href="#">About Us</a></li>
      </ul>
      <div>
      <button className="login-button">Signup</button>
      <button className="login-button bouncy">Login</button>

      </div>
    </div>
  )
}

export default NavBar