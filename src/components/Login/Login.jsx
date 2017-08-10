/* eslint-disable import/no-named-as-default, no-shadow, consistent-return */
import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { renderOrgs } from '../../actions/renderActions';
import './Login.css';

export const Login = ({ renderOrgs, userName }) => (
  <div>
    <Button onClick={() => renderOrgs(userName)}>
        Login
    </Button>
  </div>
);

Login.propTypes = {
  renderOrgs: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  userName: state.currentPage.userName,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  renderOrgs,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
