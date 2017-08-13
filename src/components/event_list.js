import React, { Component } from 'react';
import EventDetail from './event_detail';

function EventList(props) {
  return (
    <ul>
      {props.events.map((event, index) => (
        <EventDetail
          key={event.key}
          event={event}
        />
      ))}    
    </ul>
  )
}

export default EventList;
