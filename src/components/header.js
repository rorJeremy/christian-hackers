import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
            <LinkContainer to="/">
              <NavItem>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/events">
              <NavItem>Events</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Grid>
    </Navbar>
  );
}

export default Header;
