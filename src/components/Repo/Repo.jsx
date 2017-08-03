<<<<<<< HEAD
/* eslint-disable no-shadow */
import React from 'react';
import { List } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { renderDashboard } from '../../actions/renderActions';

import './Repo.css';

export const Repo = ({ repoName, renderDashboard }) => (
  <List.Item as="a" className="hoverable" onClick={() => renderDashboard(repoName)} >
    <List.Content>{repoName}</List.Content>
  </List.Item>
);

Repo.propTypes = {
  repoName: PropTypes.string.isRequired,
  renderDashboard: PropTypes.func.isRequired,
};

export const mapStateToProps = (state, { repoId }) => {
  const repo = state.repos.reposById[repoId];

  const { repoName } = repo;

  return {
    repoName,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  renderDashboard,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
=======
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
>>>>>>> Adding components re-organized
)(Repo);
