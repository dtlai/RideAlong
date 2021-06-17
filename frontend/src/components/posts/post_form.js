import React from 'react';
import './post_form.scss';
import NavBarContainer from '../nav_bar/nav_bar_container';

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
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }  

  handleSubmit(e) {
    e.preventDefault();
    let post = {
      user: this.state.user,
      title: this.state.title,
      description: this.state.description,
      carMake: this.state.carMake,
      startLocation:this.state.startLocation,
      endLocation: this.state.endLocation,
      capacity: this.state.capacity,
      numPassengers: this.state.numPassengers,
      price: this.state.price,
      leaveDate: this.state.leaveDate,
    }
    console.log(post);
    this.props.createPost(post);
    this.setState({
      title: "",
      description: "",
      carMake: "",
      startLocation: "",
      endLocation: "",
      capacity: 0,
      numPassengers: 1,
      price: 0,
      leaveDate: "",
    });
    this.props.history.push("/posts")
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="post-page">
        <NavBarContainer />
        <div className="create-post-container">
          <span className="side-img"><h3>Create a Trip!</h3></span>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input type="text"
                  value={this.state.title}
                  onChange={this.update('title')}  
                  placeholder="Title"
                />
              </div>
              <div>
                <input type="textarea"
                  value={this.state.description}
                  onChange={this.update('description')}  
                  placeholder="Description here..."
                />
              </div>
              <div>
                <input type="text"
                  value={this.state.carMake}
                  onChange={this.update('carMake')}
                  placeholder="Model of your car" 
                />
              </div>
              <div>
                <input type="text"
                  value={this.state.startLocation}
                  onChange={this.update('startLocation')} 
                  placeholder="Start Location"
                />
              </div>
              <div>
                <input type="text"
                  value={this.state.endLocation}
                  onChange={this.update('endLocation')}
                  placeholder="Destination"
                />
              </div>
              <div>
                Capacity
                <select onChange={this.update('capacity')}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                Passengers
                <select onChange={this.update('numPassengers')}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div>
                <input type="number"
                  value={this.state.price}
                  onChange={this.update('price')}
                  placeholder="How much for Gas?"
                />
              </div>
              <div>When are you leaving?
                <input type="datetime-local" onChange={this.update('leaveDate')} value={this.state.leaveDate}/>
              </div>
              <div>
                <input className="post-submit-button" type="submit" value="Submit Post"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default PostForm;