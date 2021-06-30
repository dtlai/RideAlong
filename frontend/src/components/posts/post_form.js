import React from 'react';
import './post_form.scss';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.currentUser.id,
      title: "",
      description: "",
      carMake: "",
      startLocation: "",
      endLocation: "",
      capacity: 0,
      numPassengers: 1,
      price: 0,
      leaveDate: "",
      // errors: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  // componentWillUnmount() {
  //   this.setState({ errors: {} });
  // }

  handleSubmit(e) {
    e.preventDefault();
    // let post = {
    //   user: this.state.user,
    //   title: this.state.title,
    //   description: this.state.description,
    //   carMake: this.state.carMake,
    //   startLocation:this.state.startLocation,
    //   endLocation: this.state.endLocation,
    //   capacity: this.state.capacity,
    //   numPassengers: this.state.numPassengers,
    //   price: this.state.price,
    //   leaveDate: this.state.leaveDate,
    // }
    this.props.createPost(this.state)
    // this.setState({
    //   title: "",
    //   description: "",
    //   carMake: "",
    //   startLocation: "",
    //   endLocation: "",
    //   capacity: 0,
    //   numPassengers: 1,
    //   price: 0,
    //   leaveDate: "",
    // });
    this.props.history.push("/posts")
    // if (!this.state.errors){
    //   this.props.history.push("/posts")
    // }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
      <>
      <div className="post-page">
        <div className="create-post-container">
          <span className="side-img"><h3>Plan a Trip!</h3></span>
          <div className="form-spacing">
            <form onSubmit={this.handleSubmit}>
              <div className="form-spacing">
                <input type="text"
                  value={this.state.title}
                  onChange={this.update('title')}  
                  placeholder="Title (Must be between 5 and 50 characters)"
                  required
                />
              </div>
              <div className="form-spacing">
                <input type="textarea"
                  value={this.state.description}
                  onChange={this.update('description')}  
                  placeholder="Description here..."
                  required
                />
              </div>
              <div className="form-spacing">
                <input type="text"
                  value={this.state.carMake}
                  onChange={this.update('carMake')}
                  placeholder="Model of your car"
                  required 
                />
              </div>
              <div className="form-spacing">
                <input type="text"
                  value={this.state.startLocation}
                  onChange={this.update('startLocation')} 
                  placeholder="Start Location"
                  required
                />
              </div>
              <div className="form-spacing">
                <input type="text"
                  value={this.state.endLocation}
                  onChange={this.update('endLocation')}
                  placeholder="Destination"
                  required
                />
              </div>
              <div className="capacity-container form-spacing">
                Capacity
                <select onChange={this.update('capacity')} required className="capacity-input">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                Seats Taken
                <select onChange={this.update('numPassengers')} required className="passenger-input">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="form-spacing">
                How much for gas per passenger?
                <div className="currency-input">
                  <span>$&nbsp;</span>
                  <input type="number"
                    value={this.state.price}
                    onChange={this.update('price')}
                    required
                  />
                </div>
              </div>
              <div className="form-spacing">When are you leaving?
                <input type="datetime-local"
                  className="date-input"
                  onChange={this.update('leaveDate')}
                  value={this.state.leaveDate}
                  required/>
              </div>
              <div className="form-spacing">
                <input className="post-submit-button" type="submit" value="Submit Post"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default PostForm;