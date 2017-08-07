<<<<<<< HEAD
import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import Org from '../Org/Org.jsx';
import './Orgs.css'
import {retrieveOrgs} from '../../actions/orgActions';
=======
import React, { Component } from 'react';
import { Header, Icon, Grid } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
>>>>>>> 2c48835... Adding repo view
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

<<<<<<< HEAD
<<<<<<< HEAD
  componentDidMount(){
=======
=======
function orgComponents(orgIds) {
  return orgIds.map(id => <Org key={id} orgId={id} />);
}

>>>>>>> 2f2a056... Adding with fewer linting errors
export class Organizations extends Component {
  componentDidMount() {
>>>>>>> 02a66ea... Adding with some linting errors addressed
    this.props.retrieveOrgs();
  }

<<<<<<< HEAD
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
=======
>>>>>>> 2f2a056... Adding with fewer linting errors
  render() {
>>>>>>> df38d77... Adding working orgs page:src/components/Organizations/Organizations.jsx
    return (
<<<<<<< HEAD
      <Image.Group size='small'>
        {this.orgComponents(this.props.orgIds)}

      </Image.Group>
    )
=======
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
>>>>>>> 2c48835... Adding repo view
  }
<<<<<<< HEAD
};

<<<<<<< HEAD
const mapStateToProps = state => {
  return {
    orgIds: state.orgs.ids,
    orgsByID: state.orgs.orgsByID
  }
}
=======
const mapStateToProps = state => ({
=======
}

Organizations.propTypes = {
  retrieveOrgs: PropTypes.func.isRequired,
  orgIds: PropTypes.arrayOf.isRequired,
};

export const mapStateToProps = state => ({
>>>>>>> 02a66ea... Adding with some linting errors addressed
  orgIds: state.orgs.ids,
  orgsById: state.orgs.orgsById,
});
>>>>>>> 2c48835... Adding repo view

<<<<<<< HEAD
const mapDispatchToProps = dispatch =>
  bindActionCreators ({
    retrieveOrgs
=======
export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    retrieveOrgs,
>>>>>>> 02a66ea... Adding with some linting errors addressed
  }, dispatch);

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Organizations);
