<<<<<<< HEAD
<<<<<<< HEAD
import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import Org from '../Org/Org.jsx';
import './Orgs.css'
import {retrieveOrgs} from '../../actions/orgActions';
=======
=======
/* eslint-disable import/no-named-as-default, consistent-return */
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
import React, { Component } from 'react';
import { Header, Icon, Grid, Button } from 'semantic-ui-react';
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
import { renderLogin } from '../../actions/renderActions';
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
<<<<<<< HEAD
>>>>>>> 02a66ea... Adding with some linting errors addressed
    this.props.retrieveOrgs();
=======
    this.props.retrieveOrgs(this.props.userName);
>>>>>>> 979ef55... editing .gitignore
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    if (this.props.currentPage !== 'orgs'){
      return <div />
=======
    if (this.props.currentPage !== 'orgs') {
      return <div />;
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
    }
    if (this.props.currentPage === 'orgs') {
      return (
        <div>
          <Button icon onClick={() => this.props.renderLogin()}>
            <Icon name="arrow left" />
          </Button>
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
        </div>
      );
    }
>>>>>>> 564c283... Fixing warning messages from tests
  }
}
=======
const mapStateToProps = state => ({
=======
}

Organizations.propTypes = {
  retrieveOrgs: PropTypes.func.isRequired,
  orgIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentPage: PropTypes.string.isRequired,
  renderLogin: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
>>>>>>> 02a66ea... Adding with some linting errors addressed
  orgIds: state.orgs.ids,
  orgsById: state.orgs.orgsById,
  currentPage: state.currentPage.render,
  userName: state.currentPage.userName,
});
>>>>>>> 2c48835... Adding repo view

<<<<<<< HEAD
const mapDispatchToProps = dispatch =>
  bindActionCreators ({
    retrieveOrgs
=======
export const mapDispatchToProps = dispatch =>
  bindActionCreators({
<<<<<<< HEAD
    retrieveOrgs,
>>>>>>> 02a66ea... Adding with some linting errors addressed
=======
    retrieveOrgs, renderLogin,
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
  }, dispatch);

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Organizations);
