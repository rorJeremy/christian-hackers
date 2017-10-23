import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EventCalendar from './event_calendar';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }
  componentWillMount() {
    axios
      .get('http://localhost:3002/api/v1/events.json')
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
        <p>Home Page</p>
        <p>
          <Link to="/events">Events</Link>
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
