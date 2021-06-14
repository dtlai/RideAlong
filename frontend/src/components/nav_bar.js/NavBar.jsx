import React from "react";
import "./navbar.scss";

function NavBar () { 

  return (
    <div className="navbar">
      <img src="images/ridealong_logo.png" alt="Ride Along Logo" />
      <div>
        <a href="#">Github</a>
        <a href="#">About Us</a>
      </div>
      <a href="#">Interested in becoming a driver?</a>
      
      <button>Login</button>
    </div>
  )
}

export default NavBar