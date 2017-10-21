import React from 'react';
import axios from 'axios';

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
        <h2>{this.state.event.title}</h2>
        <p>{this.state.event.description}</p>
      </div>
    );
  }
}

export default EventDetail;
