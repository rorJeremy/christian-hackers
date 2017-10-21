import React from 'react';
import SearchBar from './search_bar';
import EventListItem from './event_list_item';
import axios from 'axios';

const isSearched = searchTerm => item =>
  !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

class EventList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      searchTerm: '',
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:3002/api/v1/events.json')
      .then((response) => {
        console.log(response);
        this.setState({ events: response.data });
      })
      .catch(error => console.log(error));
  }

  onSearchChange(term) {
    this.setState({ searchTerm: term.target.value });
  }

  render() {
    return (
      <div>
        <SearchBar value={this.state.searchTerm} onSearchTermChange={this.onSearchChange} />
        <ul>
          {this.state.events
            .filter(isSearched(this.state.searchTerm))
            .map((event, index) => <EventListItem key={event.id} event={event} />)}
        </ul>
      </div>
    );
  }
}

export default EventList;
