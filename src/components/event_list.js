import React from 'react';
import moment from 'moment';
import axios from 'axios';
import { Breadcrumb, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBar from './search_bar';
import { API_ROOT } from '../config/api-config';

const isSearched = searchTerm => item =>
  !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

class EventList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      searchTerm: '',
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${API_ROOT}/events.json`)
      .then((response) => {
        this.setState({ events: response.data });
      })
      .catch(error => console.log(error));
  }

  onSearchChange(term) {
    this.setState({ searchTerm: term.target.value });
  }

  render() {
    return (
      <div className="container">
        <Breadcrumb>
          <LinkContainer to="/">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </LinkContainer>
          <Breadcrumb.Item active>Events</Breadcrumb.Item>
        </Breadcrumb>

        <div className="row">
          <SearchBar value={this.state.searchTerm} onSearchTermChange={this.onSearchChange} />
        </div>
        <br />

        <div className="row">
          <ListGroup>
            {this.state.events.filter(isSearched(this.state.searchTerm)).map(event => (
              <LinkContainer key={event.id} to={`events/${event.id}`}>
                <ListGroupItem header={event.title}>
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
