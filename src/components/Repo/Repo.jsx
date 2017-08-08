import React from 'react';
import { List } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { renderDashboard } from '../../actions/renderActions'

import './Repo.css';

export const Repo = ({ repoName, renderDashboard, }) => (
  <List.Item as='a' className='hoverable' onClick = {() => renderDashboard(repoName)} ><List.Content>{repoName}</List.Content>
  </List.Item>
);

Repo.propTypes = {
  repoName: PropTypes.string.isRequired,
};

export const mapStateToProps = (state, { repoId }) => {
  const repo = state.repos.reposById[repoId];

  const { repoName, } = repo;
  console.log('repoName',repoName);

  return {
    repoName,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  renderDashboard,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repo);
