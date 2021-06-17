import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import GoogleMaps from '../google_maps/map';

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showFeedback: false
    };

    this.showPopup = this.showPopup.bind(this);
    this.requestRide = this.requestRide.bind(this);
    this.alreadyRequested = this.alreadyRequested.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.postId).then(post => console.log(post));
  }

  // componentWillReceiveProps(nextProps) {
  //   if(this.props.match.params.postId !== nextProps.match.params.postId) {
  //       this.props.fetchPost(nextProps.match.params.postId);
  //   }
  //   if (nextProps.post) {
  //       this.props.fetchUser(nextProps.post.user);
  //   }
  // }

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

  requestRide() {
    // console.log(this.props.postId)
    console.log(this.props.post)
    const updatedPost = {
      user: this.props.post.user,
      passengers: this.props.post.passengers,
      title: this.props.post.title,
      description: this.props.post.description,
      carMake: this.props.post.carMake,
      startLocation:this.props.post.startLocation,
      endLocation: this.props.post.endLocation,
      capacity: this.props.post.capacity,
      numPassengers: this.props.post.numPassengers + 1,
      price: this.props.post.price,
      createdAt: this.props.post.createdAt,
      leaveDate: this.props.post.leaveDate,
      postId: this.props.postId
    }
    if (Object.keys(this.props.currentUser).length !== 0) {
      this.props.makeRequest(this.props.postId)
      .then(() => this.props.updatePost(updatedPost))
      .then(() => this.props.fetchPost(this.props.postId))
      .then(() => this.setState({showFeedback: true}));
    } else {
      this.props.history.push("/login")
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

  alreadyRequested() {
    console.log(this.props.post.passengers.some(passenger => passenger._id === this.props.currentUser.id))
    console.log(this.props.post)
    console.log(this.props.currentUser.id)
    if (!this.props.currentUser) return false;
    return(this.props.post.passengers.some(passenger => passenger._id === this.props.currentUser.id))
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
            <button disabled={this.alreadyRequested()} onClick={this.requestRide}>{this.alreadyRequested() ? "Requested" : "Join Ride"}</button>
          <GoogleMaps posts={[this.props.post]}/>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }
}

export default PostShow;