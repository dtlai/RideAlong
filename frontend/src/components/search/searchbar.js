import React from 'react';


class SearchBar extends React.Component {
  constructor(props){
    super(props);

  }


  render () {
    return (
      <div>
      searchbar
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          value={this.state.title}
          onChange={this.update('title')}  
          placeholder="Title"
        />
      </form>
      
      </div>
    )
  }
}