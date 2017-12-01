import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CampaignList from './campaign_list';
import { API_ROOT } from '../config/api-config';

class Campaigns extends React.Component {
  constructor(props, railsContext) {
    super(props);
    this.state = {
      campaigns: this.props.campaigns,
    };
  }

  componentDidMount() {
    axios
      .get(`${API_ROOT}/campaigns.json`)
      .then((response) => {
        console.log(response);
        this.setState({ campaigns: response.data });
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
          <Breadcrumb.Item active>Campaigns</Breadcrumb.Item>
        </Breadcrumb>

        <CampaignList campaigns={this.state.campaigns} />
      </div>
    );
  }
}

Campaigns.propTypes = {
  campaigns: PropTypes.array.isRequired,
};

Campaigns.defaultProps = {
  campaigns: [],
};

export default Campaigns;
