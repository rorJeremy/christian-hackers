import React, { Component } from 'react';
import EventListItem from './event_list_item';

const isSearched = (searchTerm) => (item) => !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

function EventList(props) {
  return (
    <ul>
      {props.events.filter(isSearched(props.term)).map((event, index) => (
        <EventListItem
        	onEventSelect={props.onEventSelect}
          key={event.key}
          event={event}
        />
      ))}    
    </ul>
  )
}

export default EventList;
