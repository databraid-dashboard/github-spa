import React from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';
import './Logout.css';

export const Logout = () => {
  const GITHUB_OAUTH_LOGOUT = `${process.env.REACT_APP_GITHUB_WIDGET_API}logout/`;
  return (
    <Grid verticalAlign={'top'} >
      <Grid.Row >
        <Grid.Column verticalAlign={'middle'}>

          <Card.Content>
            <Button
              as="a"
              href={`${GITHUB_OAUTH_LOGOUT}`}
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
};

export default Logout;
