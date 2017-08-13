import React, { Component } from 'react';

function EventListItem(props) {
	const event = props.event;

  return (
    <li>
      {event.title}
    </li>
  )
}

export default EventListItem;
