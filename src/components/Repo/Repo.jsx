import React from 'react';
import './Repo.css';
import { List, Link } from 'semantic-ui-react';
import { connect } from 'react-redux';

const Repo = ({ repoName, repoUrl, repoId }) => (
  <div>
    <List.Item as={Link} to={repoUrl}>{repoName}</List.Item>
  </div>
)

const mapStateToProps = (state, { repoId }) => {
  const repo = state.repos.reposById[repoId];

  const { repoName, repoUrl } = repo;

  return {
    repoName,
    repoUrl
  }
}

export default connect(
  mapStateToProps
)(Repo);
