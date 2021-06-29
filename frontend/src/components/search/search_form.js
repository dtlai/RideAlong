import React from 'react';
import { withRouter } from 'react-router-dom'
import './search_form.scss';
import { BiSearchAlt } from "react-icons/bi";

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startLocation: '',
      endLocation: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/posts?startLocation=${this.state.startLocation}&endLocation=${this.state.endLocation}`);
  }

  handleChange(field) {
    return e => (
      this.setState({[field]: e.currentTarget.value})
    )
  }

  render () {
    return (
      <div className="search-form-container">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.startLocation}
            placeholder="Starting Location"
            onChange={this.handleChange('startLocation')}
          />
          <input type="text"
            value={this.state.endLocation}
            placeholder="Destination"
            onChange={this.handleChange('endLocation')}
          />
          
          <input className="search-submit" type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchBar);