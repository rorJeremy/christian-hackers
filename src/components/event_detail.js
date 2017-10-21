import React from 'react';
import axios from 'axios';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
      .get(`http://localhost:3002/api/v1/events/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({ event: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default EventDetail;
