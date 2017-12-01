import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CampaignList from './campaign_list';
import { AXIOS_INSTANCE } from '../config/axios_instance';

class UserCampaigns extends React.Component {
  constructor(props, railsContext) {
    super(props);
    this.state = {
      campaigns: this.props.campaigns,
    };
  }

  componentDidMount() {
    AXIOS_INSTANCE.get('/user_campaigns.json')
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

UserCampaigns.propTypes = {
  campaigns: PropTypes.array.isRequired,
};

UserCampaigns.defaultProps = {
  campaigns: [],
};

export default UserCampaigns;
