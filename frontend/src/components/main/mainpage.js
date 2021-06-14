import React from 'react';
import NavBar from '../nav_bar.js/NavBar';
import './mainpage.scss';

class MainPage extends React.Component {
  render() {
    return (
      <div>
          <NavBar />
        <div className="main-splash">
          <h3></h3>
        </div>
        <footer>
          Copyright &copy; 2021 RideAlong
        </footer>
      </div>
    )
  }
}

export default MainPage;