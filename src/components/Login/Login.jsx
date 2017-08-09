/* eslint-disable import/no-named-as-default, no-shadow, consistent-return */
import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { renderOrgs } from '../../actions/renderActions';
import './Login.css';
const AUTH_ROUTE = 'http://localhost:3000/auth/github';

export const Login = ({ currentPage, renderOrgs }) => {
  if (currentPage !== 'login') {
    return <div />;
  }
  if (currentPage === 'login') {

    return (
      <div>
        <Button onClick={() => renderOrgs()}>
        Login
        </Button>
      </div>
    );
  }
};

hitAuthRoute( AUTH_ROUTE) => {
  fetch(AUTH_ROUTE)
    .then(response =>
    fetch())
}

Login.propTypes = {
  currentPage: PropTypes.string.isRequired,
  renderOrgs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentPage: state.currentPage.render,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  renderOrgs,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
