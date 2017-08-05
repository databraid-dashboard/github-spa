import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { retrieveOrgs } from '../../actions/orgActions';
import Org from '../Org/Org';
import './Orgs.css';

export class Organizations extends Component {
  componentDidMount() {
    this.props.retrieveOrgs();
  }

  orgComponents(orgIds) {
    return orgIds.map(id => <Org key={id} orgId={id} />);
  }

  renderOrgs() {
    this.setState({ showOrgs: !this.state.showOrgs });
  }

  render() {
    return (
      <Image.Group size="small">
        {this.orgComponents(this.props.orgIds)}
      </Image.Group>
    );
  }
}

Organizations.propTypes = {
  retrieveOrgs: PropTypes.func.isRequired,
  orgIds: PropTypes.number.isRequired,
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
