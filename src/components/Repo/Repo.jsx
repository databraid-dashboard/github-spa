/* eslint-disable no-shadow */
import React from 'react';
import { List } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { renderDashboard } from '../../actions/renderActions';
import injectWidgetId from '../../utils/utils';
import './Repo.css';

export const Repo = ({ repoName, renderDashboard }) =>
  (<List.Item as="a" className="hoverable" onClick={() => renderDashboard(repoName)}>
    <List.Content>
      {repoName}
    </List.Content>
  </List.Item>);

Repo.propTypes = {
  repoName: PropTypes.string.isRequired,
  renderDashboard: PropTypes.func.isRequired,
};

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const repoId = ownProps.repoId;
  const repo = state.widgets.byId[id].repos.reposById[repoId];
  const { repoName } = repo;

  return {
    repoName,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    renderDashboard,
  }, dispatch);

export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(Repo));
