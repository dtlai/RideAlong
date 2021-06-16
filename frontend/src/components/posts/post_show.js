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
    this.props.fetchPost(this.props.postId)
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

  formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  formatTime = (dateString) => {
    const options = { hour12: true, hour: "numeric", minute: "numeric" }
    return new Date(dateString).toLocaleTimeString("en-US", options)
  }

  render() {
    const { title, description, carMake, startLocation, endLocation, capacity, numPassengers, price, createdAt, leaveDate, user } = this.props.post;
    const { firstName, lastName, username } = this.props.post.user;
    return(
      <div>
        <NavBarContainer/>
        {this.showPopup()}
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          <li>Driver: {firstName} {lastName}</li>
          <li>Profile: {username}</li>
          <li>Date/Time: {this.formatDate(leaveDate)}, {this.formatTime(leaveDate)}</li>
          <li>Pickup: {startLocation}</li>
          <li>Dropoff: {endLocation}</li>
          <li>Car Make: {carMake}</li>
          <li>Seats Available: {parseInt(capacity)-parseInt(numPassengers)} of {capacity}</li>
          <li>Cost per Passenger: ${parseFloat(price).toFixed(2)}</li>
          <li>Posted: {this.formatDate(createdAt)}, {this.formatTime(createdAt)}</li>
        </ul>
        <button type="button" onClick={this.requestRide}>Join Ride</button>
      </div>
    )
  }
}

export default PostShow;