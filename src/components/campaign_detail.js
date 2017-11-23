import React from 'react';
import axios from 'axios';
import { Breadcrumb, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { API_ROOT } from '../config/api-config';

class CampaignDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campaign: { title: 'Loading', description: 'Loading' },
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`${API_ROOT}/campaigns/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({ campaign: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (sessionStorage.getItem('user') === null) {
      return (
        <div className="container">
          <Breadcrumb>
            <LinkContainer to="/">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </LinkContainer>
            <LinkContainer to="/campaigns">
              <Breadcrumb.Item>Campaigns</Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active>{this.state.campaign.title}</Breadcrumb.Item>
          </Breadcrumb>

          <h2>{this.state.campaign.title}</h2>
          <p>{this.state.campaign.description}</p>
        </div>
      );
    }
    return (
      <div className="container">
        <Breadcrumb>
          <LinkContainer to="/">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </LinkContainer>
          <LinkContainer to="/campaigns">
            <Breadcrumb.Item>Campaigns</Breadcrumb.Item>
          </LinkContainer>
          <Breadcrumb.Item active>{this.state.campaign.title}</Breadcrumb.Item>
        </Breadcrumb>

        <h2>{this.state.campaign.title}</h2>
        <p>{this.state.campaign.description}</p>
        <a href="https://www.meetup.com/hackersdfw/" target="_blank" rel="noopener noreferrer">
          <Button bsStyle="success">RSVP To This Event</Button>
        </a>
      </div>
    );
  }
}

export default CampaignDetail;
