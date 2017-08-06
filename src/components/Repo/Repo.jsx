import React from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Repo.css';

const Repo = ({ repoName, repoUrl }) => (
  <div>
    <List.Item as="a" to={repoUrl}>{repoName}</List.Item>
  </div>
);

Repo.propTypes = {
  repoName: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
};

const mapStateToProps = (state, { repoId }) => {
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
