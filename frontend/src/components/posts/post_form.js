import React from 'react';

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
      leaveDate: Date.now,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }  

  handleSubmit(e) {
    e.preventDefault();
    let post = {
      post: this.state.post
    }
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
      leaveDate: Date.now,
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
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
            <select>
              <option value="1" onChange={this.update('capacity')}>1</option>
              <option value="2" onChange={this.update('capacity')}>2</option>
              <option value="3" onChange={this.update('capacity')}>3</option>
              <option value="4" onChange={this.update('capacity')}>4</option>
              <option value="5" onChange={this.update('capacity')}>5</option>
              <option value="6" onChange={this.update('capacity')}>6</option>
            </select>
          </div>
          <div>
            Passengers
            <select>
              <option value="1" onChange={this.update('numPassengers')}>1</option>
              <option value="2" onChange={this.update('numPassengers')}>2</option>
              <option value="3" onChange={this.update('numPassengers')}>3</option>
              <option value="4" onChange={this.update('numPassengers')}>4</option>
              <option value="5" onChange={this.update('numPassengers')}>5</option>
              <option value="6" onChange={this.update('numPassengers')}>6</option>
            </select>
          </div>
          <div>
            <input type="number"
              value={this.state.price}
              onChange={this.update('price')}
              placeholder="Price"
            />
          </div>
          <input type="submit" value="Create Post"></input>
        </form>
      </div>
    )
  }
}

export default PostForm;