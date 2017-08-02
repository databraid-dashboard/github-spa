/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import renderIf from 'render-if';
import RepoList from './components/RepoList/RepoList';
import Login from './components/Login/Login';
import Organizations from './components/Organizations/Organizations';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import Issues from './components/Issues/Issues.jsx';
import PrTable from './components/PrTable/PrTable.jsx'
import Milestones from './components/Milestones/Milestones.jsx'
import { Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import {retrieveOrgs} from './actions/orgActions';
import {connect} from 'react-redux';

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
