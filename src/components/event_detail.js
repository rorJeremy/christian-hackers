import React, { Component } from 'react';

function EventDetail(props) {
	const event = props.event;

  return (
    <li>
      {event.title}
    </li>
  )
}

export default EventDetail;
