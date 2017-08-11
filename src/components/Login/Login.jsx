/* eslint-disable import/no-named-as-default, no-shadow, consistent-return */
import React from 'react';
import { Button } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { renderOrgs } from '../../actions/renderActions';
import './Login.css';
// import validateInput from './loginUtils';


export const Login = ({ renderOrgs }) => (
  <div>
    <Button as='a' href='http://localhost:8000/auth/github/' onClick={() => {renderOrgs()}}>
        Login
    </Button>
  </div>
);



Login.propTypes = {
  renderOrgs: PropTypes.func.isRequired,
  userName: PropTypes.string,
};

const mapStateToProps = state => ({
  currentPage: state.currentPage.render,
  session: state.currentPage.session,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  renderOrgs,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
