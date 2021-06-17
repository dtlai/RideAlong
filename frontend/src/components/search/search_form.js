import React from 'react';
import { connect } from 'react-redux';
import {queryPosts} from '../../actions/post_actions';
import './search_form.scss';

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
    this.props.queryPosts(this.state)
  }

  handleChange(field) {
    return e => {
      this.setState({field: e.currentTarget.value})
    }
  }

  render () {
    return (
      <div className="search-form-container">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.title}
            placeholder="Start Location"
            onChange={e => this.handleChange('startLocation')}
          />
          <input type="text"
            value={this.state.title}
            placeholder="Destination"
            onChange={e => this.handleChange('endLocation')}
          />
          <input type="button" value="Search"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {queryPosts})(SearchBar);