import React, {Component} from 'react';
import './App.css';
import Issues from './components/Issues/Issues.jsx';
import PrTable from './components/PrTable/PrTable.jsx'
import Milestones from './components/Milestones/Milestones.jsx'
import { Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import {retrieveOrgs} from './actions/orgActions';
import {connect} from 'react-redux';

class App extends Component{

  render() {
    return (
    <Container>
      <Issues/>
      <PrTable/>
      <Milestones/>
    </Container>
  );
  }

}


const mapStateToProps = state => {
  return {
    orgs: state.orgs,
    // issues: state.issues
  }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  retrieveOrgs
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
