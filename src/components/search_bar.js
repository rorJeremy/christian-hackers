import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange() {
  	
  }

  render() {
	  return (
	    <input onChange={this.onInputChange} />
	  )
  }
}

export default SearchBar;
