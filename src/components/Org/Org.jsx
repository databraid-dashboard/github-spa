import React from 'react';
import { Image, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Org.css';

const Org = ({ avatarUrl, orgName, reposUrl }) => (
  <div>
    <Image src={avatarUrl} />
    <List.Item as="a">{orgName}</List.Item>
  </div>
);

const mapStateToProps = (state, { orgId }) => {
  const org = state.orgs.orgsByID[orgId];

  const { avatarUrl, orgName, reposUrl } = org;

  return {
    avatarUrl,
    orgName,
    reposUrl,
  };
};

Org.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  orgName: PropTypes.string.isRequired,
  reposUrl: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
)(Org);
