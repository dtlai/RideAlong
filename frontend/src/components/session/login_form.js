import React from "react";
import { withRouter } from "react-router-dom";
import "./session.scss";
import {Link} from 'react-router-dom';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.demo = {
      email: "demo@email.com",
      password: "demopass",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the posts page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/posts");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user)
      .then(()=> {
        if (
          Object.keys(this.state.errors).length === 0 &&
          typeof this.props.handleClose === "function"
        ) {
          this.props.handleClose();
        }
      })  
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul className="errors"> 
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form">
        <form onSubmit={this.handleSubmit} className="login-form-container">
          <div className="login-form">
            <img src="https://i.imgur.com/vscAchT.png" alt="Ride Along Logo" />
            <span className="login-header">
              <h3>Login</h3>
              <p>New to RideAlong? <Link to="/signup" style={{color: "blue"}}>Sign up</Link></p>
            </span>
            {this.renderErrors()}
            <div className="input-fields-container">
              <input
                required
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
                className="email-input"
              />
              <input
                required
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
            </div>
            <button className="session-button">Submit</button>
          </div>
        </form>
        <div className="demo-button-container">
          <button
            className="session-button"
            onClick={() => this.props.login(this.demo)}
          >
            Guest User
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
