import React, { Component } from 'react';
import { Header, Icon, Image, Grid } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { retrieveOrgs } from '../../actions/orgActions';
import Org from '../Org/Org';
import './Organizations.css';

class Organizations extends Component {
  componentDidMount() {
    this.props.retrieveOrgs();
  }

  orgComponents(orgIds) {
    return orgIds.map(id => <Org key={id} orgId={id} />);
  }

  render() {
    return (
      <Grid centered columns={3} padded>
        <Header as='h2' icon textAlign='center'>
          <Icon name='github'/>
          <Header.Content>
            Which organization are you interested in?
          </Header.Content>
        </Header>
        <Grid.Row>
          {this.orgComponents(this.props.orgIds)}
        </Grid.Row>
      </Grid>
    );
  }
}

Organizations.propTypes = {
  retrieveOrgs: PropTypes.func.isRequired,
  orgIds: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  orgIds: state.orgs.ids,
  orgsById: state.orgs.orgsById,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    retrieveOrgs,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Organizations);
