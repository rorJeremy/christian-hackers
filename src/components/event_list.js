import React from 'react';
import moment from 'moment';
import axios from 'axios';
import { Breadcrumb, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBar from './search_bar';

const isSearched = searchTerm => item =>
  !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

class EventList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      searchTerm: ''
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:3002/api/v1/events.json')
      .then(response => {
        console.log(response);
        this.setState({ events: response.data });
      })
      .catch(error => console.log(error));
  }

  onSearchChange(term) {
    this.setState({ searchTerm: term.target.value });
  }

  render() {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };

    return (
      <div className="container">
        <Breadcrumb>
          <LinkContainer to="/">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </LinkContainer>
          <Breadcrumb.Item active>Events</Breadcrumb.Item>
        </Breadcrumb>

        <div className="row">
          <SearchBar
            value={this.state.searchTerm}
            onSearchTermChange={this.onSearchChange}
          />
        </div>
        <br />

        <div className="row">
          <ListGroup>
            {this.state.events
              .filter(isSearched(this.state.searchTerm))
              .map(event => (
                <LinkContainer to={`events/${event.id}`}>
                  <ListGroupItem key={event.id} header={event.title}>
                    <b>Start Time:</b>{' '}
                    {moment(event.start_time)
                      .utc()
                      .format('dddd, MMMM Do YYYY, h:mm a')}{' '}
                    <b>End Time:</b>{' '}
                    {moment(event.end_time)
                      .utc()
                      .format('dddd, MMMM Do YYYY, h:mm a')}
                  </ListGroupItem>
                </LinkContainer>
              ))}
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default EventList;
