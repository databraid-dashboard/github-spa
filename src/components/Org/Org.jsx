import React from 'react';
import { Grid, Image, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Org.css';

export const Org = ({ avatarUrl, orgName, reposUrl }) => (
  <Grid.Column>
    <Image src={avatarUrl} size="small" />
    <List.Item as="a">{orgName}</List.Item>
  </Grid.Column>
);

export const mapStateToProps = (state, { orgId }) => {
  const org = state.orgs.orgsById[orgId];

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
