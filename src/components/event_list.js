import React, { Component } from 'react';
import EventListItem from './event_list_item';

const isSearched = (searchTerm) => (item) => !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

class EventList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [{key: "1", title: "event1", description: "the first event"}, {key: "2", title: "event2", description: "the second event"}]
    };
  }

  render() {
    return (
      <ul>
        {this.state.events.map((event, index) => (
          <EventListItem
            key={event.key}
            event={event}
          />
        ))}    
      </ul>
    )    
  }
}

export default EventList;
