import React, { Component } from 'react';
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <h2>
	    <Link to="/">
	    	Christian Hackers
	    </Link>
    </h2>
  )
}

export default Header;
