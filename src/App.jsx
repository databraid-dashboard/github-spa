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

const App = () => {
  return (
  <Container>
    <Organizations />
    <RepoList />
    <Dashboard />
  </Container>
  )
};

export default App;
