import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import Org from '../Org/Org.jsx';
import './Orgs.css'
import {retrieveOrgs} from '../../actions/orgActions';
import { connect } from 'react-redux';
<<<<<<< HEAD:src/components/Orgs/Orgs.jsx
import { bindActionCreators } from 'redux';

class Organizations extends Components{

  // constructor(props){
  //   super(props)
  //
  //   this.state = {
  //     showOrgs: false;
  //   };
  //
  //   this.renderOrgs = this.renderOrgs.bind(this)
  // }
=======
import PropTypes from 'prop-types';
import { retrieveOrgs } from '../../actions/orgActions';
import Org from '../Org/Org';
import './Organizations.css';
>>>>>>> df38d77... Adding working orgs page:src/components/Organizations/Organizations.jsx

  componentDidMount(){
    this.props.retrieveOrgs();
  }

  orgComponents = (orgIds) => {
    return orgIds.map(id => {
      <Org key={id} orgId={id} />
    })
  }

<<<<<<< HEAD:src/components/Orgs/Orgs.jsx
  renderOrgs(){
    this.setState( {showOrgs: !this.state.showOrgs });
  }

  render(){
=======
  render() {
>>>>>>> df38d77... Adding working orgs page:src/components/Organizations/Organizations.jsx
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
