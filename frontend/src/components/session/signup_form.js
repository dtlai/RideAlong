import React from "react";
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      password2: "",
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };
    
    this.props.signup(user, this.props.history)
      .then(()=> {
        if (
          Object.keys(this.state.errors).length === 0 &&
          typeof this.props.handleClose === "function"
        ) {
          this.props.handleClose();
        }
      })
      .then(() => {
        let user_login = {
          email: this.state.email,
          password: this.state.password
        }
        this.props.login(user_login)
      })
  }

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
        <form onSubmit={this.handleSubmit}>
          <div className="signup-container">
            <div className="logo-home-link-container">
              <Link to="/" className="logo-home-link">
                <img
                  src="https://i.imgur.com/vscAchT.png"
                  alt="Ride Along Logo"
                />
              </Link>
            </div>
            <span className="login-header">
              <h3>Sign Up for RideAlong</h3>
              <p>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "blue" }}>
                  Log In
                </Link>
              </p>
            </span>
            {this.renderErrors()}
            <div className="name-container">
              <input
                required
                type="text"
                value={this.state.firstName}
                onChange={this.update("firstName")}
                placeholder="First Name"
                className="first-name-input"
              />
              <input
                required
                type="text"
                value={this.state.lastName}
                onChange={this.update("lastName")}
                placeholder="Last Name"
              />
            </div>
            <input
              required
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
            <input
              required
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <input
              required
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <input
              required
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />
            <button className="session-button">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
