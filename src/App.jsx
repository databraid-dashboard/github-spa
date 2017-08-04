import React from 'react';
import { Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RepoList from './components/RepoList/RepoList';
<<<<<<< HEAD
import Orgs from './components/Orgs/Orgs';
=======
import Organizations from './components/Organizations/Organizations';
>>>>>>> df38d77c7f67b1cfe38e2e4fdc8b4cf646b39d49
import Dashboard from './components/Dashboard/Dashboard';
import { retrieveOrgs } from './actions/orgActions';
import './App.css';

const App = () => (
  <Container>
<<<<<<< HEAD
    {/* <Orgs />
    <RepoList /> */}
    <Dashboard />
=======
    <Organizations />
    {/* <RepoList />
    <Dashboard /> */}
>>>>>>> df38d77c7f67b1cfe38e2e4fdc8b4cf646b39d49
  </Container>
);

const mapStateToProps = state => ({
<<<<<<< HEAD
  orgs: state.orgs,
  issues: state.issues,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  retrieveOrgs,
=======
  // currentPage: state.currentPage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
>>>>>>> df38d77c7f67b1cfe38e2e4fdc8b4cf646b39d49
}, dispatch);

export default connect(
  mapStateToProps,
<<<<<<< HEAD
  mapDispatchToProps,
=======
>>>>>>> df38d77c7f67b1cfe38e2e4fdc8b4cf646b39d49
)(App);
