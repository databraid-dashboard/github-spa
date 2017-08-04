import React from 'react';
import { Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RepoList from './components/RepoList/RepoList';
import Orgs from './components/Orgs/Orgs';
import Dashboard from './components/Dashboard/Dashboard';
import { retrieveOrgs } from './actions/orgActions';
import './App.css';

const App = () => (
  <Container>
    {/* <Orgs />
    <RepoList /> */}
    <Dashboard />
  </Container>
);

const mapStateToProps = state => ({
  orgs: state.orgs,
  issues: state.issues,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  retrieveOrgs,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
