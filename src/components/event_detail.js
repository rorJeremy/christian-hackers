import React from 'react';

function EventDetail({ event }) {
  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
    </div>
  );
}

export default EventDetail;
