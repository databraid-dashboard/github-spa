import React from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cookie from 'react-cookies';
import PropTypes from 'prop-types';
import './Logout.css';
import { logout } from '../../actions/renderActions';
/* eslint-disable no-shadow */
export const triggerLogout = (logout) => {
  cookie.remove('userName');
  cookie.remove('githubAccessToken');
  logout();
};

export const Logout = ({ logout }) => (
  /* eslint-enable */
  <Grid verticalAlign={'top'} >
    <Grid.Row >
      <Grid.Column verticalAlign={'middle'}>
        <Card.Content>
          <Button
            as="a"
            onClick={() => { triggerLogout(logout); }}
            className="hand peace icon"
            size="medium"
            content="Logout"
            icon="hand peace"
          />
        </Card.Content>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  );


Logout.propTypes = {
  /* eslint-disable react/no-unused-prop-types, react/require-default-props */
  logout: PropTypes.func.isRequired,
};
export const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
}, dispatch);

export default connect(null, mapDispatchToProps)(Logout);
