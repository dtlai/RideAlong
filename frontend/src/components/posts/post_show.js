import React from 'react';
import NavBarContainer from '../nav_bar.js/nav_bar_container';

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showFeedback: false,
      rideRequested: false
    };
  }

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.postId !== nextProps.match.params.postId) {
        this.props.fetchPost(nextProps.match.params.postId);
    }
  }

  showPopup() {
    if (!this.state.showFeedback) {
      return null;
    } else {
      setTimeout(function(){ this.setState({showFeedback: false}) }, 3000);
      this.setState({rideRequested: true});
      return(
        <div>
          <h3>Ride Requested!</h3>
        </div>
      )
    }
  }

  requestRide() {
    if (!this.state.rideRequested) {
      this.setState({showFeedback: true});
    } 
  }

  render() {
    const { title, description, carMake, startLocation, endLocation, capacity, numPassengers, price, createdAt, leaveDate } = this.props;
    return(
      <div>
        <NavBarContainer/>
        {this.showPopup()}
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          <li>Trip Date: {leaveDate}</li>
          <li>Pickup: {startLocation}</li>
          <li>Dropoff: {endLocation}</li>
          <li>Car Make: {carMake}</li>
          <li>Seats Available: {parseInt(capacity)-parseInt(numPassengers)} of {capacity}</li>
          <li>Cost per Passenger: ${parseFloat(price).toFixed(2)}</li>
          <li>Posted: {createdAt}</li>
        </ul>
        <button type="button" onClick={this.requestRide}>Join Ride</button>
      </div>
    )
  }
}

export default PostShow;