import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EventCalendar from './event_calendar';

const eventz = [
  {
    end: 'Tue Oct 30 2017 18:00:00 GMT-0400 (EDT)',
    start: 'Tue Oct 30 2017 21:00:00 GMT-0400 (EDT)',
    title: 'Hacknight/Serverless Campaign Kickoff!',
    id: 1,
  },
  {
    end: 'Fri Nov 06 2017 18:00:00 GMT-0400 (EDT)',
    start: 'Fri Nov 06 2017 21:00:00 GMT-0400 (EDT)',
    title: 'Hacknight/Serverless Campaign week 2',
    id: 2,
  },
];

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
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
        <EventCalendar events={eventz} eventSelected={this.rerouteToEventPage.bind(this)} />
      </div>
    );
  }
}

export default HomePage;
