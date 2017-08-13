import React, { Component } from 'react';

function EventDetail(props) {
	const event = props.event;

  return (
    <div>
      <h2>{event.title}</h2>
    </div>
  )
}

export default EventDetail;
