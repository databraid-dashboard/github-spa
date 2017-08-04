/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Container } from 'semantic-ui-react';
import RepoList from './components/RepoList/RepoList';
import Login from './components/Login/Login';
import Organizations from './components/Organizations/Organizations';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Orgs from './components/Orgs/Orgs.jsx'
import Repos from './components/Repos/Repos.jsx'
import { Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import {retrieveOrgs} from './actions/orgActions';
import {connect} from 'react-redux';

export class App extends Component{

const App = () => (
  <Container>
    <Organizations />
    {/* <RepoList />
    <Dashboard /> */}
  </Container>
);

const mapStateToProps = state => ({
  // currentPage: state.currentPage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
  mapStateToProps,
)(App);
