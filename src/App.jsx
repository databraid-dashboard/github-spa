/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Container } from 'semantic-ui-react';
import RepoList from './components/RepoList/RepoList';
import Login from './components/Login/Login';
import Organizations from './components/Organizations/Organizations';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import Issues from './components/Issues/Issues.jsx';
import PrTable from './components/PrTable/PrTable.jsx'
import Milestones from './components/Milestones/Milestones.jsx'
import { Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import {retrieveOrgs} from './actions/orgActions';
import {connect} from 'react-redux';

export class App extends Component{

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
    // issues: state.issues
  }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  retrieveOrgs,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
