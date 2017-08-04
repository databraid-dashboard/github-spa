import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import './Repo.css';
import { List, Link } from 'semantic-ui-react';
=======
import { List } from 'semantic-ui-react';
>>>>>>> d1d9951... adding fixed dashboard view
=======
import { Grid, List } from 'semantic-ui-react';
>>>>>>> 2c48835... Adding repo view
import { connect } from 'react-redux';

<<<<<<< HEAD
const Repo = ({ repoName, repoUrl, repoId }) => (
  <div>
    <List.Item as='a' to={repoUrl}>{repoName}</List.Item>
  </div>
)
=======
const Repo = ({ repoName, repoUrl }) => (
    <List.Item as='a' to={repoUrl}><List.Content>{repoName}</List.Content>
    </List.Item>
);

Repo.propTypes = {
  repoName: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
};
>>>>>>> 2c48835... Adding repo view

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
