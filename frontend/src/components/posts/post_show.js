import React from 'react';
import ShowMap from '../google_maps/post_show_map';
import './post_show.scss';
import { CgProfile } from 'react-icons/cg';
import { ImArrowRight } from 'react-icons/im';

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showFeedback: false
    };

    this.showPopup = this.showPopup.bind(this);
    this.requestRide = this.requestRide.bind(this);
    this.cancelRide = this.cancelRide.bind(this);
    this.alreadyRequested = this.alreadyRequested.bind(this);
    this.alreadyFull = this.alreadyFull.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.postId)
    .then(()=>window.scrollTo(0, 0));
  }

  showPopup() {
    if (!this.state.showFeedback) {
      return null;
    } else {
      setTimeout(()=> this.setState({showFeedback: false}), 3000);
      return(
        <div className="post-show-popup">
          <h3>Ride Requested!</h3>
        </div>
      )
    }
  }

  cancelRide() {
    const updatedPost = {
      user: this.props.post.user,
      passengers: this.props.post.passengers,
      title: this.props.post.title,
      description: this.props.post.description,
      carMake: this.props.post.carMake,
      startLocation:this.props.post.startLocation,
      endLocation: this.props.post.endLocation,
      capacity: this.props.post.capacity,
      numPassengers: this.props.post.numPassengers - 1,
      price: this.props.post.price,
      createdAt: this.props.post.createdAt,
      leaveDate: this.props.post.leaveDate,
      postId: this.props.postId
    }
    if (Object.keys(this.props.currentUser).length !== 0) {
      this.props.cancelRequest(this.props.postId)
      .then(() => this.props.updatePost(updatedPost))
      .then(() => this.props.fetchPost(this.props.postId))
    } else {
      this.props.history.push("/login")
    }
  }

  requestRide() {
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
    if (!this.props.currentUser) return false;
    return(this.props.post.passengers.some(passenger => passenger._id === this.props.currentUser.id))
  }

  alreadyFull() {
    return (this.props.post.capacity - this.props.post.numPassengers <= 0)
  }

  render() {
    if (this.props.post) {
      const { title, description, carMake, startLocation, endLocation, capacity, numPassengers, price, createdAt, leaveDate } = this.props.post;
      const { firstName, lastName, username } = this.props.post.user;
      return(
        <div className="post-show">
          {this.showPopup()}
          <h2>{title}</h2>
          <div className="post-show-info">
            <div>
              <div className="post-show-top">
                <div className="post-show-description">
                  <h3>{startLocation} &nbsp; <ImArrowRight fill="lightskyblue" stroke="gray" strokeWidth="1px"/> &nbsp; {endLocation}</h3>
                  <h4>{this.formatDate(leaveDate)} ~ {this.formatTime(leaveDate)}</h4>
                  <p>{description}</p>
                  <div className="post-show-driver">
                    Your driver is <span className="bold">{firstName} {lastName}</span> 
                    <span className="post-show-driver-profile"><CgProfile size="2em" background-color="white" color="rgb(56, 179, 253)"/> {username}</span>
                  </div>
                  <ul className="post-show-details">
                    <li className="post-show-detail-item">
                      You will be riding in a 
                      <span className="bold">{carMake}</span>
                    </li>
                    <li className="post-show-detail-item">
                      Seats Available 
                      { this.alreadyFull() ? <span className="bold">FULL</span> :
                        <span className="bold">{capacity-numPassengers} of {capacity}</span>
                      }
                    </li>
                    <li className="post-show-detail-item">
                      Cost per Passenger
                      <span className="bold">${price.toFixed(2)}</span>
                    </li>
                    <li>This trip was posted on {this.formatDate(createdAt)} at {this.formatTime(createdAt)}</li>
                  </ul>
                </div>
                <div>
                <ul className="post-show-box">
                  <li><span className="bold">${price.toFixed(2)}</span> / passenger</li>
                  <li>From {startLocation} to {endLocation}</li>
                  <li></li>
                  <li><span className="bold">{capacity-numPassengers}</span> of <span className="bold">{capacity}</span> seats available</li>
                  <button className={this.alreadyRequested() ? "cancel-button" : ""} disabled={this.alreadyFull() && !this.alreadyRequested()} onClick={this.alreadyRequested() ? 
                    this.cancelRide : this.requestRide}>{this.alreadyRequested() ? "Cancel Ride" : 
                    (this.alreadyFull() ? "Full" : "Join Ride")}
                  </button>
                </ul>
              </div>
            </div>
              <ShowMap post={this.props.post} key={this.props.post}/>
            </div>
          </div>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }
}

export default PostShow;