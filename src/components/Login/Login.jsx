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


<<<<<<< HEAD
<<<<<<< HEAD
export const Login = ({ currentPage, renderOrgs, userName }) => {
<<<<<<< HEAD
  if (currentPage !== 'login') {
    return <div />;
  }
  if (currentPage === 'login') {

=======
>>>>>>> e342caa... Adding latest work
    return (
      <div>
        <Button onClick={() => renderOrgs(userName)}>
=======
export const Login = ({ renderOrgs, userName }) => (
  <div>
    <Button onClick={() => renderOrgs(userName)}>
>>>>>>> 8213532... Frontend/Backend sync
=======
export const Login = ({ renderOrgs }) => (
  <div>
    <Button as='a' href='http://localhost:8000/auth/github/' onClick={() => {renderOrgs()}}>
>>>>>>> 18ae6cd... Played with render action, reducer login component and store, all..day...
        Login
    </Button>
  </div>
);



Login.propTypes = {
  renderOrgs: PropTypes.func.isRequired,
  userName: PropTypes.string,
};

const mapStateToProps = state => ({
<<<<<<< HEAD
  currentPage: state.currentPage.render,
<<<<<<< HEAD
  session: state.currentPage.session,
=======
=======
>>>>>>> 8213532... Frontend/Backend sync
  userName: state.currentPage.userName,
>>>>>>> 4bf6324... Adding some api calls
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  renderOrgs,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
