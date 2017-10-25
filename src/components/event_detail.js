import React from 'react';
import axios from 'axios';
import { Breadcrumb, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import moment from 'moment';
import { API_ROOT } from '../config/api-config';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event: { title: 'Loading', description: 'Loading' },
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`${API_ROOT}/events/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({ event: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <Breadcrumb>
          <LinkContainer to="/">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </LinkContainer>
          <LinkContainer to="/events">
            <Breadcrumb.Item>Events</Breadcrumb.Item>
          </LinkContainer>
          <Breadcrumb.Item active>{this.state.event.title}</Breadcrumb.Item>
        </Breadcrumb>

        <h2>{this.state.event.title}</h2>
        <p>{this.state.event.description}</p>
        <p>
          <b>Start Time:</b>{' '}
          {moment(this.state.event.start_time)
            .utc()
            .format('dddd, MMMM Do YYYY, h:mm a')}
        </p>
        <p>
          <b>End Time:</b>{' '}
          {moment(this.state.event.end_time)
            .utc()
            .format('dddd, MMMM Do YYYY, h:mm a')}
        </p>
        <a href="https://www.meetup.com/hackersdfw/" target="_blank">
          <Button bsStyle="success">RSVP To This Event</Button>
        </a>
      </div>
    );
  }
}

export default EventDetail;
