<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
=======
import React, {Component} from 'react';
import logo from './logo.svg';
>>>>>>> 7e05dfe... mapped store, state, readme, mockAPI calls, and began wiring up components
=======
import { Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RepoList from './components/RepoList/RepoList';
import Organizations from './components/Organizations/Organizations';
import Dashboard from './components/Dashboard/Dashboard';
import { retrieveOrgs } from './actions/orgActions';
>>>>>>> df38d77... Adding working orgs page
import './App.css';
<<<<<<< HEAD
import Issues from './components/Issues/Issues.jsx';
<<<<<<< HEAD
import PR_Table from './components/PR_Table/PR_Table.jsx'
=======
import PrTable from './components/PrTable/PrTable.jsx'
import Milestones from './components/Milestones/Milestones.jsx'
=======
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Orgs from './components/Orgs/Orgs.jsx'
import Repos from './components/Repos/Repos.jsx'
>>>>>>> 9486a99... Adding components re-organized
import { Container } from 'semantic-ui-react';
<<<<<<< HEAD
>>>>>>> 2d0b4d9... Adding Milestones Component

const App = () => (
  <Container>
<<<<<<< HEAD
    <Issues/>
<<<<<<< HEAD
    <PR_Table/>
  </div>
=======
    <PrTable/>
    <Milestones/>
=======
    <Organizations />
    {/* <RepoList />
    <Dashboard /> */}
>>>>>>> df38d77... Adding working orgs page
  </Container>
>>>>>>> 2d0b4d9... Adding Milestones Component
);
=======
import { bindActionCreators } from 'redux';
import {retrieveOrgs} from './actions/orgActions';
import {connect} from 'react-redux';

<<<<<<< HEAD
class App extends Component{
>>>>>>> 7e05dfe... mapped store, state, readme, mockAPI calls, and began wiring up components
=======
export class App extends Component{
>>>>>>> 8aab236... added loading bar and tests

  componentDidMount(){
    this.props.retrieveOrgs();
  }
  render() {
    return (
    <Container>
<<<<<<< HEAD
      <Issues {...this.props.issues}/>
      <PrTable/>
      <Milestones/>
=======
      <Orgs/>
      <Repos/>
      <Dashboard/>
>>>>>>> 9486a99... Adding components re-organized
    </Container>
    )
  }
}

<<<<<<< HEAD
const mapStateToProps = state => {
  return {
    orgs: state.orgs,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    issues: state.repos
=======
    issues: state.issues,
>>>>>>> d3454fd... Adding PR Table and Milestones Components
=======
    // issues: state.issues
>>>>>>> dab0224... added loading feature, wrote tests
=======
    issues: state.issues
>>>>>>> 0365ab2... fixed related milestone: errors, loading feature, tests, must re-update snapshot, not rendering
  }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  retrieveOrgs,
=======
const mapStateToProps = state => ({
  // currentPage: state.currentPage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
>>>>>>> df38d77... Adding working orgs page
}, dispatch);

export default connect(
  mapStateToProps,
<<<<<<< HEAD
  mapDispatchToProps
=======
>>>>>>> df38d77... Adding working orgs page
)(App);
