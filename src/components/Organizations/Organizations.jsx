import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import Org from '../Org/Org.jsx';
import './Orgs.css'
import {retrieveOrgs} from '../../actions/orgActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { retrieveOrgs } from '../../actions/orgActions';
import Org from '../Org/Org';
import './Organizations.css';

  componentDidMount(){
    this.props.retrieveOrgs();
  }

  orgComponents = (orgIds) => {
    return orgIds.map(id => {
      <Org key={id} orgId={id} />
    })
  }

  render() {
    return (
      <Image.Group size='small'>
        {this.orgComponents(this.props.orgIds)}

      </Image.Group>
    )
  }
};

const mapStateToProps = state => {
  return {
    orgIds: state.orgs.ids,
    orgsByID: state.orgs.orgsByID
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators ({
    retrieveOrgs
  }, dispatch);

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Organizations);
