import React from "react";
import "./request_box.scss";
import { withRouter } from "react-router-dom";

class RequestBox extends React.Component {
  render() {
    let { request } = this.props;
    let startDate = request.createdAt.slice(0, 10);
    let dateLeave = request.leaveDate.slice(0, 10);
    return (
      <div onClick={() => this.props.history.push(`/posts/${request._id}`)}>
        <div className="request-title-container">
          <span className="request-title">{request.title}</span>
          <span>{startDate}</span>
        </div>
        <div className="request-capacity-container">
          <span>Seats: {request.capacity} </span>
          <span>
            Seats left: {parseInt(request.capacity) - parseInt(request.numPassengers)}
          </span>
        </div>
        <div className="request-user-container">Driver: {request.user}</div>
        <div className="request-locations-container">
          <span>
            Leaving {request.startLocation} to {request.endLocation} on {dateLeave}
          </span>
        </div>
        <div>Price range: ${request.price}</div>
      </div>
    );
  }
}

export default withRouter(RequestBox);
