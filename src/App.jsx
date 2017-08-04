import React from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import renderIf from 'render-if';
import RepoList from './components/RepoList/RepoList';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Orgs from './components/Orgs/Orgs.jsx';
import Repos from './components/Repos/Repos.jsx';
import './App.css';

const App = ({ currentPage }) => (
  <Container>
    {renderIf(currentPage === 'login')(<Login />)}
    {renderIf(currentPage === 'orgs')(<Organizations />)}
    {renderIf(currentPage === 'repos')(<RepoList />)}
    {renderIf(currentPage === 'dashboard')(<Dashboard />)}
  </Container>
);

App.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

App.defaultProps = {
  currentPage: '',
};

const mapStateToProps = state => ({
  currentPage: state.currentPage.render,
});

export default connect(
  mapStateToProps,
  null,
)(App);
