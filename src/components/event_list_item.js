import React from 'react';
import { Link } from 'react-router-dom';

function EventListItem(props) {
  const { event, onEventSelect } = props;

  return (
    <li>
      <Link to={`/events/${event.key}`}>{event.title}</Link>
    </li>
  );
}

export default EventListItem;
