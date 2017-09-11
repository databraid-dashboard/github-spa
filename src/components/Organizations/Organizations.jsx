/* eslint-disable import/no-named-as-default, consistent-return */
import React, { Component } from 'react';
import { Header, Icon, Grid, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { renderLogin } from '../../actions/renderActions';
import { retrieveOrgs } from '../../actions/orgActions';
import Org from '../Org/Org';
import injectWidgetId from '../../utils/utils';
import './Organizations.css';

function orgComponents(orgIds) {
  return orgIds.map(id => <Org key={id} orgId={id} />);
}

export class Organizations extends Component {
  componentDidMount() {
    this.props.retrieveOrgs(this.props.userName);
  }

  render() {
    return (
      <div>
        <Button icon onClick={() => this.props.renderLogin()}>
          <Icon name="arrow left" />
        </Button>
        <Grid centered columns={3} padded>
          <Header as="h2" icon textAlign="center">
            <Icon name="github" />
            <Header.Content>Which organization are you interested in?</Header.Content>
          </Header>
          <Grid.Row>
            {orgComponents(this.props.orgIds)}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

Organizations.propTypes = {
  retrieveOrgs: PropTypes.func.isRequired,
  orgIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  renderLogin: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

Organizations.defaultProps = {
  orgIds: [],
  userName: '',
};

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const orgIds = state.widgets.byId[id].orgs.ids;
  const orgsById = state.widgets.byId[id].orgs.orgsById;
  const userName = state.widgets.byId[id].currentPage.userName;

  return {
    orgIds,
    orgsById,
    userName,
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    retrieveOrgs,
    renderLogin,
  }, dispatch);

export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(Organizations));
