import React from 'react';
import { Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RepoList from './components/RepoList/RepoList';
import Organizations from './components/Organizations/Organizations';
import Dashboard from './components/Dashboard/Dashboard';
import { retrieveOrgs } from './actions/orgActions';
import './App.css';

const App = () => (
  <Container>
    <Organizations />
    <RepoList />
    <Dashboard />
  </Container>
);

const mapStateToProps = state => ({

  orgs: state.orgs,
  issues: state.issues,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  retrieveOrgs,

  // currentPage: state.currentPage,
});


export default connect(
  mapStateToProps,

  mapDispatchToProps,

)(App);
