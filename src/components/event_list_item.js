import React, { Component } from 'react';

function EventListItem(props) {
	const event = props.event;
	const onEventSelect = props.onEventSelect;

  return (
    <li onClick={() => onEventSelect(event)}>
      {event.title}
    </li>
  )
}

export default EventListItem;
