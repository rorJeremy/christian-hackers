import React, { Component } from 'react';
import { Link } from "react-router-dom";

function EventListItem(props) {
  const event = props.event;
  const onEventSelect = props.onEventSelect;

  return (
    <li>
      <Link to={`/events/${event.key}`}>
        {event.title}
      </Link>
    </li>
  )
}

export default EventListItem;
