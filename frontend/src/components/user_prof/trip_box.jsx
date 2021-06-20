import React from "react";
import "./trip_box.scss";
import { withRouter } from "react-router-dom";
import {TiArrowRightOutline} from "react-icons/ti";

class TripBox extends React.Component {

  formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  render() {
    let { trip } = this.props;
    let leaveDate = trip.leaveDate.slice(0, 10);
    return (
      <div className="trip-box" onClick={() => this.props.history.push(`/posts/${trip._id}`)}>
        <span className="trip-title">{trip.title}</span>
        <div className="trip-locations-container">
          <div>{trip.startLocation} <TiArrowRightOutline/> {trip.endLocation}</div>
          <div>{this.formatDate(leaveDate)}</div>
        </div>
        <div className="trip-user-container">Driver: {trip.user.firstName} {trip.user.lastName}</div>
        <div>Price/passenger: ${trip.price.toFixed(2)}</div>
      </div>
    );
  }
}

export default withRouter(TripBox);
