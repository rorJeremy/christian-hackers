import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';

function Header() {
  return (
    <Navbar inverse fixedTop>
      <Grid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Christian Hackers</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <Link to="/">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/events">Events</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Grid>
    </Navbar>
  );
}

export default Header;
