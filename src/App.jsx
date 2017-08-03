<<<<<<< HEAD
import React from 'react';
=======
import React, {Component} from 'react';
import logo from './logo.svg';
>>>>>>> 7e05dfe... mapped store, state, readme, mockAPI calls, and began wiring up components
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
    <Issues/>
<<<<<<< HEAD
    <PR_Table/>
  </div>
=======
    <PrTable/>
    <Milestones/>
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

const mapStateToProps = state => {
  return {
    orgs: state.orgs,
<<<<<<< HEAD
<<<<<<< HEAD
    issues: state.repos
=======
    issues: state.issues,
>>>>>>> d3454fd... Adding PR Table and Milestones Components
=======
    // issues: state.issues
>>>>>>> dab0224... added loading feature, wrote tests
  }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  retrieveOrgs,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
