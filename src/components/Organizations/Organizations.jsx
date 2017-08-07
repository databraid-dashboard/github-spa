import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import './Orgs.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { retrieveOrgs } from '../../actions/orgActions';
import Organizations from '../Organizations/Organizations';
import './Organizations.css';


class Organizations extends Components{

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
