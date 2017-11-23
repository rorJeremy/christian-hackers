import React from 'react';
import axios from 'axios';
import { Breadcrumb, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { API_ROOT } from '../config/api-config';

const instance = axios.create({
  baseURL: `${API_ROOT}`,
  timeout: 5000,
  headers: JSON.parse(sessionStorage.user),
});

class CampaignDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campaign: { title: 'Loading', description: 'Loading' },
      registered: true,
    };
    this.registerForCampaign = this.registerForCampaign.bind(this);
    this.unregisterForCampaign = this.unregisterForCampaign.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    instance
      .get(`/campaigns/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({ campaign: response.data });
      })
      .catch(error => console.log(error));

    instance
      .get(`/campaigns/${id}/registered_or_nah`)
      .then((response) => {
        console.log(response);
        this.setState({ registered: response.data });
      })
      .catch(error => console.log(error));
  }

  registerForCampaign() {
    const { id } = this.props.match.params;
    instance
      .post(`/campaigns/${id}/campaign_registrations.json`, {
        id,
      })
      .then((response) => {
        this.setState({ registered: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  unregisterForCampaign() {
    const { id } = this.props.match.params;
    instance
      .delete(`/campaigns/${id}/campaign_registration/remove.json`, {
        id,
      })
      .then((response) => {
        this.setState({ registered: false });
      })
      .catch((error) => {
        console.log(error);
      });
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
    } else if (this.state.registered === false) {
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
          <Button bsStyle="success" onClick={this.registerForCampaign}>
            Register For This Campaign
          </Button>
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
        <Button bsStyle="danger" onClick={this.unregisterForCampaign}>
          Unregister To This Campaign
        </Button>
      </div>
    );
  }
}

export default CampaignDetail;
