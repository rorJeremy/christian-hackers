import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

function Header() {
  return (
    <h2>
      <Link to="/">Christian Hackers</Link>
    </h2>
  );
}

export default Header;
