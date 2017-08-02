<<<<<<< HEAD
import React from 'react';
=======
import React, {Component} from 'react';
import logo from './logo.svg';
>>>>>>> 7e05dfe... mapped store, state, readme, mockAPI calls, and began wiring up components
import './App.css';
import Issues from './components/Issues/Issues.jsx';
<<<<<<< HEAD
import PR_Table from './components/PR_Table/PR_Table.jsx'
=======
import PrTable from './components/PrTable/PrTable.jsx'
import Milestones from './components/Milestones/Milestones.jsx'
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

class App extends Component{
>>>>>>> 7e05dfe... mapped store, state, readme, mockAPI calls, and began wiring up components

  componentDidMount(){
    this.props.retrieveOrgs();
  }
  render() {
    return (
    <Container>
      <Issues {...this.props.issues}/>
      <PrTable/>
      <Milestones/>
    </Container>
  );
  }
}


const mapStateToProps = state => {
  return {
    orgs: state.orgs,
    issues: state.repos
  }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  retrieveOrgs,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
