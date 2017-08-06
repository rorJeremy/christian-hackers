import React from 'react';

class SearchBar extends React.Component {
	// We use the constructor method to initialize state in a class based component
	// functional components do not have state, only class based components have state
	// all javascript classes have a special function called 'constructor'. The constructor function is the first
	// and only function called automatically whenever a new instance of the class is created. So the constructor
	// function is called all the time.
	// The constructor function is reserved for doing some setup inside of our class, like initializing variables,
	// initializing state, and stuff like that.
  constructor(props) {
    super(props);

    this.state = {
    	term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
  	console.log(event.target.value);
  }

  render() {
	  return (
	  	<div>
		    <input 
		    	onChange={event => this.setState({term: event.target.value})} 
		    />
		    Value of Input: {this.state.term}
	    </div>
	  )
  }
}

export default SearchBar;
