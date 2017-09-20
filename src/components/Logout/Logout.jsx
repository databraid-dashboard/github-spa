import React from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';
import './Logout.css';
import { logout } from '../../actions/renderActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const GITHUB_OAUTH_LOGOUT = `${process.env.REACT_APP_GITHUB_API_URL}/logout`;

export const triggerLogout(logout) =>{
  cookies.remove('userName');
  logout();
}

export const Logout = ( logout ) => (

  <Grid verticalAlign={'top'} >
    <Grid.Row >
      <Grid.Column verticalAlign={'middle'}>
        <Card.Content>
          <Button
            as="a"
            onClick={()=> {triggerLogout(logout)}}
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

export const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
}, dispatch);

export default connect(null, mapDispatchToProps)(Logout);
