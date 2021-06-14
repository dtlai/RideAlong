import React from "react";
import "./navbar.scss";
import { FaGithub } from "react-icons/fa";

function NavBar () { 

  return (
    <div className="nav-bar">
      <img src="images/ridealong_logo.png" alt="Ride Along Logo" />
      <ul className="nav-links">
        <li>
          <div className="icon github">
            <div className="tooltip">Github</div>
            <FaGithub size={20} color={'black'}/>
          </div>
        
        </li>
        <li><a href="#">About Us</a></li>
      </ul>
      
      <button className="driver-button">Interested in becoming a driver?</button>
      <button className="login-button bouncy">Login</button>
    </div>
  )
}

export default NavBar