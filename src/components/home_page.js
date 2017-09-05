import React, { Component } from 'react';
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <p>
        Home Page
      </p>
      <p>
        <Link to="/events">
          Events
        </Link>
      </p>
    </div>
  )
}

export default HomePage;
