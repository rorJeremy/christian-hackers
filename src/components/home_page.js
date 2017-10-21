import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <p>Home Page</p>
      <p>
        <Link to="/events">Events</Link>
      </p>
    </div>
  );
}

export default HomePage;
