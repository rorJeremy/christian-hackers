import React from 'react';

class SearchBar extends React.Component {
  // We use the constructor method to initialize state in a class based component
  // functional components do not have state, only class based components have state
  // all javascript classes have a special function called 'constructor'. The constructor function is the first
  // and only function called automatically whenever a new instance of the class is created. So the constructor
  // function is called all the time.
  // The constructor function is reserved for doing some setup inside of our class, like initializing variables,
  // initializing state, and stuff like that.
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //    term: ''
  //   };

  //   this.onInputChange = this.onInputChange.bind(this);
  // }

  // onInputChange(term) {
  //   this.setState({ term });
  // }

  render() {
    const { value, onSearchTermChange } = this.props;
    return (
      <div className="col-md-4 col-md-offset-4">
        <form>
          <input
            className="form-control"
            type="text"
            value={value}
            onChange={onSearchTermChange}
            placeholder="Search Events..."
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
