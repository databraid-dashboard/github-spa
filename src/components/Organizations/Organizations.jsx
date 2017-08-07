import React, { Component } from 'react';
import { Header, Icon, Grid } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { retrieveOrgs } from '../../actions/orgActions';
import Org from '../Org/Org';
import './Organizations.css';

function orgComponents(orgIds) {
  return orgIds.map(id => <Org key={id} orgId={id} />);
}

export class Organizations extends Component {
  componentDidMount() {
    this.props.retrieveOrgs();
  }

  render() {
    return (
      <Grid centered columns={3} padded>
        <Header as="h2" icon textAlign="center">
          <Icon name="github" />
          <Header.Content>
            Which organization are you interested in?
          </Header.Content>
        </Header>
        <Grid.Row>
          {orgComponents(this.props.orgIds)}
        </Grid.Row>
      </Grid>
    );
  }
}

Organizations.propTypes = {
  retrieveOrgs: PropTypes.func.isRequired,
  orgIds: PropTypes.arrayOf.isRequired,
};

export const mapStateToProps = state => ({
  orgIds: state.orgs.ids,
  orgsById: state.orgs.orgsById,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    retrieveOrgs,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Organizations);
