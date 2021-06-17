import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import GoogleMaps from '../google_maps/map';

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      seats: null,
      showFeedback: false,
      rideRequested: false
    };

    this.showPopup = this.showPopup.bind(this);
    this.requestButton = this.requestButton.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.requestRide = this.requestRide.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.postId).then(()=>console.log(this.props))
    // this.props.fetchUser(this.props.userId).then(()=>console.log(this.props))
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
      setTimeout(()=> this.setState({showFeedback: false}), 3000);
      return(
        <div>
          <h3>Ride Requested!</h3>
        </div>
      )
    }
  }

  requestButton() {
    if (!this.state.rideRequested) {
      this.setState({showFeedback: true});
      this.setState({rideRequested: true});
    } 
  }

  requestRide() {

  }

  handleSelection(e) {
    this.setState({seats: e.target.value})
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
    if (this.props.post) {
      const { title, description, carMake, startLocation, endLocation, capacity, numPassengers, price, createdAt, leaveDate } = this.props.post;
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
            <li>Date & Time: {this.formatDate(leaveDate)}, {this.formatTime(leaveDate)}</li>
            <li>Pickup: {startLocation}</li>
            <li>Dropoff: {endLocation}</li>
            <li>Car: {carMake}</li>
            <li>Seats Available: {capacity-numPassengers} of {capacity}</li>
            <li>Cost per Passenger: ${price.toFixed(2)}</li>
            <li>Posted: {this.formatDate(createdAt)}, {this.formatTime(createdAt)}</li>
          </ul>
          <form onSubmit={this.requestRide}>
            <label>Number of Seats:
              <select onChange={this.handleSelection}>
                {Array.from({length: (capacity - numPassengers)}, (v, k) => k + 1).map(seat => <option value={seat.toString()}>{seat}</option>)}
              </select>
            </label>
            <button disabled={this.state.rideRequested} onClick={this.requestButton}>Join Ride</button>
          </form>
          <GoogleMaps posts={[this.props.post]}/>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }
}

export default PostShow;