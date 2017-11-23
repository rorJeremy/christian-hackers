import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import $ from 'jquery';
import { API_ROOT } from '../config/api-config';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut(e) {
    e.preventDefault();
    $.ajax({
      type: 'DELETE',
      url: `${API_ROOT}/auth/sign_out`,
      data: JSON.parse(sessionStorage.getItem('user')),
    }).done(() => {
      sessionStorage.removeItem('user');
      this.props.history.push('/login');
    });
  }

  render() {
    if (sessionStorage.getItem('user') === null) {
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
                <LinkContainer to="/#">
                  <NavItem>About</NavItem>
                </LinkContainer>
                <LinkContainer to="/events">
                  <NavItem>Events</NavItem>
                </LinkContainer>
                <LinkContainer to="/campaigns">
                  <NavItem>Campaigns</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Log In</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Grid>
        </Navbar>
      );
    }
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
              <LinkContainer to="/#">
                <NavItem>About</NavItem>
              </LinkContainer>
              <LinkContainer to="/events">
                <NavItem>Events</NavItem>
              </LinkContainer>
              <LinkContainer to="/campaigns">
                <NavItem>Campaigns</NavItem>
              </LinkContainer>
              {sessionStorage.getItem('user') && (
                <NavItem>{JSON.parse(sessionStorage.getItem('user')).uid}</NavItem>
              )}
              <LinkContainer to="#" onClick={this.handleSignOut}>
                <NavItem>Sign Out</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Grid>
      </Navbar>
    );
  }
}

export default withRouter(Header);
