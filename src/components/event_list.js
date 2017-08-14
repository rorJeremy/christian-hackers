import React, { Component } from 'react';
import EventListItem from './event_list_item';

function EventList(props) {
  return (
    <ul>
      {props.events.map((event, index) => (
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
