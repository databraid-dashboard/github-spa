import React from 'react';
<<<<<<< HEAD
import './Repo.css';
import { List, Link } from 'semantic-ui-react';
=======
import { List } from 'semantic-ui-react';
>>>>>>> d1d9951... adding fixed dashboard view
import { connect } from 'react-redux';

const Repo = ({ repoName, repoUrl, repoId }) => (
  <div>
    <List.Item as='a' to={repoUrl}>{repoName}</List.Item>
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
