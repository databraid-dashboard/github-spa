/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import renderIf from 'render-if';
import RepoList from './components/RepoList/RepoList';
import Login from './components/Login/Login';
import Organizations from './components/Organizations/Organizations';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

// import { injectUserName } from './utils/utils';
class App extends Component {
  getChildContext() {
    return { widgetId: this.props.widgetId };
  }


  render() {
    const { currentPage } = this.props;
    return (
      <Container className="github-widget-container">
        {renderIf(currentPage === 'login')(<Login />)}
        {renderIf(currentPage === 'orgs')(<Organizations />)}
        {renderIf(currentPage === 'repos')(<RepoList />)}
        {renderIf(currentPage === 'dashboard')(<Dashboard />)}
      </Container>
    );
  }
}

App.propTypes = {
  currentPage: PropTypes.string.isRequired,
  widgetId: PropTypes.string.isRequired,
};

App.defaultProps = {
  currentPage: '',
  widgetId: 'github',
};

App.childContextTypes = {
  widgetId: PropTypes.string,
};

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const currentPage = state.widgets.byId[id].currentPage.render;

  return {
    currentPage,
  };
};

export default connect(mapStateToProps)(App);
