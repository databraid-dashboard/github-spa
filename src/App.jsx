/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux'
import renderIf from 'render-if';
import RepoList from './components/RepoList/RepoList';
import Login from './components/Login/Login';
import Organizations from './components/Organizations/Organizations';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

const App = ({ currentPage, store }) => (
  <Container>
    {console.log(currentPage)}
    {console.log(store)}
    {renderIf(currentPage==='login')(<Login />)}
    {/* {renderIf(currentPage==='orgs')(<Organizations />)}
    {renderIf(currentPage==='repos')(<RepoList />)}
    {renderIf(currentPage==='dashboard')(<Dashboard />)} */}
  </Container>
);

const mapStateToProps = state => ({
  currentPage: state.currentPage.render,
  store: state,
})

export default connect(
  mapStateToProps,
)(App);
