import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';
import axios from 'axios';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
      .get('http://localhost:3002/api/v1/events.json')
      .then((response) => {
        console.log(response);
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

        <SearchBar value={this.state.searchTerm} onSearchTermChange={this.onSearchChange} />
        <ul>
          {this.state.events.filter(isSearched(this.state.searchTerm)).map(event => (
            <li key={event.id}>
              <Link style={{ color: 'black' }} to={`events/${event.id}`}>
                <h3>{event.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EventList;
