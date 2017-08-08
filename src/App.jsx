/* eslint-disable import/no-named-as-default */

import React from 'react';
import { Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { renderOrgs, renderLogin, renderRepos, renderDashboard } from './actions/renderActions';
import RepoList from './components/RepoList/RepoList';
import Organizations from './components/Organizations/Organizations';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import Issues from './components/Issues/Issues';

const App = ({ currentPage }) => {
if (currentPage === 'orgs') {
  return (
    <Container>
      <Organizations />
    </Container>
  )
} else if (currentPage === 'repos') {
  return (
    <Container>
      <RepoList />
    </Container>
  )
} else if (currentPage === 'dashboard') {
  return (
    <Container>
      <Dashboard />
    </Container>
  )
} else {
  <Container>
    <div>Something has gone wrong with your application</div>
  </Container>
}

};

export const mapStateToProps = state => ({
  currentPage: state.currentPage,
})

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    renderOrgs, renderLogin, renderRepos, renderDashboard,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
