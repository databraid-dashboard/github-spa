/* eslint-disable import/no-named-as-default, no-shadow */
import React from 'react';
import { Grid, Image, List } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { renderRepos } from '../../actions/renderActions';
import './Org.css';
import injectWidgetId from '../../utils/utils';

export const Org = ({ avatarUrl, orgName, renderRepos }) =>
  (<Grid.Column>
    <Image
      className="hoverable"
      onClick={() => renderRepos(orgName)}
      src={avatarUrl}
      size="small"
    />
    <List.Item as="a" className="hoverable" onClick={() => renderRepos(orgName)}>
      {orgName}
    </List.Item>
  </Grid.Column>);

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const orgId = ownProps.orgId;

  const org = state.widgets.byId[id].orgs.orgsById[orgId];
  const { avatarUrl, orgName } = org;
  return {
    avatarUrl,
    orgName,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      renderRepos,
    },
    dispatch,
  );

Org.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  orgName: PropTypes.string.isRequired,
  renderRepos: PropTypes.func.isRequired,
};

export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(Org));
