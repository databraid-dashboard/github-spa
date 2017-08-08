import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { renderLogin } from '../../action/renderActions';
import './Login.css';

export const Login = () => {
  if (currentPage !== 'login') {
    return <div />
  }
  if (currentPage === 'login') {
    return (
      <Button
    )
  }
}
