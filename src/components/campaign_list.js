import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function CampaignList(props) {
  const { campaigns } = props;

  return (
    <div className="row">
      <ListGroup>
        {campaigns.map(campaign => (
          <LinkContainer key={campaign.id} to={`/campaigns/${campaign.id}`}>
            <ListGroupItem header={campaign.title} />
          </LinkContainer>
        ))}
      </ListGroup>
    </div>
  );
}

CampaignList.propTypes = {
  campaigns: PropTypes.array.isRequired,
};

CampaignList.defaultProps = {
  campaigns: [],
};

export default CampaignList;
