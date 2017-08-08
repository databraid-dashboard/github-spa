import React from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Repo.css';

export const Repo = ({ repoName, repoUrl }) => (
  <List.Item as="a" to={repoUrl}><List.Content>{repoName}</List.Content>
  </List.Item>
);

Repo.propTypes = {
  repoName: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
};

export const mapStateToProps = (state, { repoId }) => {
  const repo = state.repos.reposById[repoId];

  const { repoName, repoUrl } = repo;

  return {
    repoName,
    repoUrl,
  };
};

export default connect(
  mapStateToProps,
)(Repo);
