import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
// import { retrieveOrgs } from './actions/orgActions';
import { connect } from 'react-redux';
import Issues from '../Issues/Issues';
import PrTable from '../PrTable/PrTable';
import Milestones from '../Milestones/Milestones';
import './Dashboard.css';

export const Dashboard = () => (
  <Container>
    <Grid>
      <Grid.Column floated="left" width={4}>
        <Issues />
      </Grid.Column>
      <Grid.Column floated="right" width={4}>
        <Milestones />
      </Grid.Column>
    </Grid>
    <PrTable />
  </Container>
);

export default Dashboard;
