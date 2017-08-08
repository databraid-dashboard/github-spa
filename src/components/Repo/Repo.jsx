/* eslint-disable no-shadow */
import React from 'react';
<<<<<<< HEAD
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
=======
import { List } from 'semantic-ui-react';
>>>>>>> 02a66ea... Adding with some linting errors addressed
import { connect } from 'react-redux';

<<<<<<< HEAD
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
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { renderDashboard } from '../../actions/renderActions';

import './Repo.css';

<<<<<<< HEAD
<<<<<<< HEAD
const Repo = ({ repoName, repoUrl }) => (
  <div>
    <List.Item as="a" to={repoUrl}>{repoName}</List.Item>
  </div>
>>>>>>> edbe0e0... fml
=======
export const Repo = ({ repoName, repoUrl }) => (
  <List.Item as="a" to={repoUrl}><List.Content>{repoName}</List.Content>
=======
export const Repo = ({ repoName, renderDashboard, }) => (
  <List.Item as='a' className='hoverable' onClick = {() => renderDashboard(repoName)} ><List.Content>{repoName}</List.Content>
>>>>>>> 564c283... Fixing warning messages from tests
=======
export const Repo = ({ repoName, renderDashboard }) => (
  <List.Item as="a" className="hoverable" onClick={() => renderDashboard(repoName)} >
    <List.Content>{repoName}</List.Content>
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
  </List.Item>
>>>>>>> 02a66ea... Adding with some linting errors addressed
);

Repo.propTypes = {
  repoName: PropTypes.string.isRequired,
  renderDashboard: PropTypes.func.isRequired,
};
<<<<<<< HEAD
>>>>>>> 2c48835... Adding repo view
=======
>>>>>>> edbe0e0... fml

export const mapStateToProps = (state, { repoId }) => {
  const repo = state.repos.reposById[repoId];

  const { repoName } = repo;

  return {
    repoName,
<<<<<<< HEAD
<<<<<<< HEAD
    repoUrl
  }
}

export default connect(
  mapStateToProps
=======
    repoUrl,
=======
>>>>>>> 564c283... Fixing warning messages from tests
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  renderDashboard,
}, dispatch);

export default connect(
  mapStateToProps,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> edbe0e0... fml
=======
  mapDispatchToProps
>>>>>>> 564c283... Fixing warning messages from tests
=======
  mapDispatchToProps,
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
)(Repo);
