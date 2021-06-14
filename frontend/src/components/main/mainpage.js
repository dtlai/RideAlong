import React from 'react';
import NavBar from '../nav_bar.js/NavBar';
class MainPage extends React.Component {
  render() {
    return (
      <div>
          <NavBar />
        <footer>
          Copyright &copy; 2021 RideAlong
        </footer>
      </div>
    )
  }
}

export default MainPage;