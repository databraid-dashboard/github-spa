import React from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';
import { logout } from '../../actions/renderActions';
import './Logout.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const LOGOUT_ENDPOINT = '/logout';
const GITHUB_OAUTH_LOGOUT = `${process.env.REACT_APP_GITHUB_API_URL}${LOGOUT_ENDPOINT}`;
function doLogout(logout) {
  logout();
  //TODO: This could be done easily just by clearing cookies on the client.
  //no server round trip needed
  window.location = `${GITHUB_OAUTH_LOGOUT}`;
}

export const Logout = (logout) => (
  <Grid verticalAlign={'top'} >
    <Grid.Row >
      <Grid.Column verticalAlign={'middle'}>
        <Card.Content>
          <Button
            as="a"
            onClick={() => doLogout(logout)}
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

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    logout,
  }, dispatch);

export default connect(null, mapDispatchToProps)(Logout);
