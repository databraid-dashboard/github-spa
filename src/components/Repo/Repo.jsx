import React from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { renderDashboard } from '../../actions/renderActions';

import './Repo.css';

export const Repo = ({ repoName, repoUrl }) => (
  <List.Item as="a" to={repoUrl}><List.Content>{repoName}</List.Content>
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

)(Repo);
