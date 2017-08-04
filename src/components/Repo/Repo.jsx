import React from 'react';
<<<<<<< HEAD
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
=======
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Repo.css';

const Repo = ({ repoName, repoUrl }) => (
  <div>
    <List.Item as="a" to={repoUrl}>{repoName}</List.Item>
  </div>
>>>>>>> edbe0e0... fml
);

Repo.propTypes = {
  repoName: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
};
<<<<<<< HEAD
>>>>>>> 2c48835... Adding repo view
=======
>>>>>>> edbe0e0... fml

const mapStateToProps = (state, { repoId }) => {
  const repo = state.repos.reposById[repoId];

  const { repoName, repoUrl } = repo;

  return {
    repoName,
<<<<<<< HEAD
    repoUrl
  }
}

export default connect(
  mapStateToProps
=======
    repoUrl,
  };
};

export default connect(
  mapStateToProps,
>>>>>>> edbe0e0... fml
)(Repo);
