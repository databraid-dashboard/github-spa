/* eslint-disable import/no-named-as-default */

import React from 'react';
import { Container } from 'semantic-ui-react';
import RepoList from './components/RepoList/RepoList';
import Organizations from './components/Organizations/Organizations';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

const App = () => (
  <Container>
    <Organizations />
    <RepoList />
    <Dashboard />
  </Container>
);


export default App;
