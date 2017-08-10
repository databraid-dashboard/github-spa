/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Container } from 'semantic-ui-react';
import RepoList from './components/RepoList/RepoList';
import Login from './components/Login/Login';
import Organizations from './components/Organizations/Organizations';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

const App = () => (
  <Container>
<<<<<<< HEAD
    <Login />
    <Organizations />
    <RepoList />
    <Dashboard />
=======
    {renderIf(currentPage==='login')(<Login />)}
    {renderIf(currentPage==='orgs')(<Organizations />)}
    {renderIf(currentPage==='repos')(<RepoList />)}
    {renderIf(currentPage==='dashboard')(<Dashboard />)}
>>>>>>> Adding syced app
  </Container>
);

export default App;
