import React from 'react';
import NavBar from '../nav_bar.js/NavBar';
import { FaGithub } from "react-icons/fa";

import './mainpage.scss';

class MainPage extends React.Component {
  render() {
    return (
      <div className="parent-main">
        <div className="main-splash">
          <NavBar />
          <div className="title-container">
            <h1 className="title-splash">Get started today!</h1>
          </div>
        </div>
        <footer>
          Copyright &copy; 2021 RideAlong
          <div className="icon github">
            <div className="tooltip">Github</div>
            <FaGithub size={20} color={'black'}/>
          </div>
        </footer>
      </div>
    )
  }
}

export default MainPage;