import React, { Component } from 'react';
import SearchBar from './search_bar';
import EventListItem from './event_list_item';

const isSearched = (searchTerm) => (item) => !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

class EventList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [{key: "1", title: "event1", description: "the first event"}, {key: "2", title: "event2", description: "the second event"}],
      searchTerm: ''
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(term) {
    this.setState({ searchTerm: term.target.value });
  }

  render() {
    return (
      <div>
        <SearchBar value={this.state.searchTerm} onSearchTermChange={this.onSearchChange} />
        <ul>
          {this.state.events.filter(isSearched(this.state.searchTerm)).map((event, index) => (
            <EventListItem
              key={event.key}
              event={event}
            />
          ))}    
        </ul>
      </div>
    )    
  }
}

export default EventList;
