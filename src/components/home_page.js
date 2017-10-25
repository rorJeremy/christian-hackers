import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EventCalendar from './event_calendar';
import { API_ROOT } from '../config/api-config';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentWillMount() {
    axios
      .get(`${API_ROOT}/events.json`)
      .then((response) => {
        console.log(response);
        this.setState({ events: response.data });
      })
      .catch(error => console.log(error));
  }
  rerouteToEventPage(eventID) {
    this.props.history.push(`/events/${eventID}`);
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Christian Hackers</h1>
        <p className="text-center">We are adventurers, visionaries, risk-takers, and artists</p>
        <p className="text-center">
          who voluntarily follow Christ as we use our gifts to create and help others.
        </p>
        <p>
          <Link to="/events">View Events As A List</Link>
        </p>
        <EventCalendar
          events={this.state.events}
          eventSelected={this.rerouteToEventPage.bind(this)}
        />
      </div>
    );
  }
}

export default HomePage;
