/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Container } from 'semantic-ui-react';
import RepoList from './components/RepoList/RepoList';
import Login from './components/Login/Login';
import Organizations from './components/Organizations/Organizations';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import Issues from './components/Issues/Issues.jsx';
import PR_Table from './components/PR_Table/PR_Table.jsx'

const App = () => (
  <Container>
    <Login />
    <Organizations />
    <RepoList />
    <Dashboard />
  </Container>
);

export default App;
