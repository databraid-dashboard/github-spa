<<<<<<< HEAD
<<<<<<< HEAD
import React, {Component} from 'react';
import './Dashboard.css';
import Issues from './Issues/Issues.jsx';
import PrTable from './PrTable/PrTable.jsx'
import Milestones from './Milestones/Milestones.jsx'
import { Container } from 'semantic-ui-react';
=======
import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
<<<<<<< HEAD
>>>>>>> df38d77... Adding working orgs page
import { bindActionCreators } from 'redux';
<<<<<<< HEAD
import {retrieveOrgs} from './actions/orgActions';
import {connect} from 'react-redux';

class Dashboard extends Component{
=======
// import { retrieveOrgs } from './actions/orgActions';
=======
import React from 'react';
import { Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
// import { retrieveOrgs } from '../actions/orgActions';
>>>>>>> edbe0e0... fml
import { connect } from 'react-redux';
=======
// import { bindActionCreators } from 'redux';
// import { retrieveOrgs } from './actions/orgActions';
// import { connect } from 'react-redux';
>>>>>>> 02a66ea... Adding with some linting errors addressed
import Issues from '../Issues/Issues';
import PrTable from '../PrTable/PrTable';
import Milestones from '../Milestones/Milestones';
<<<<<<< HEAD
import LineChart from '../LineChart/LineChart';
import './Dashboard.css';
>>>>>>> d1d9951... adding fixed dashboard view

<<<<<<< HEAD
<<<<<<< HEAD
  render() {
    return (
    <Container>
      <Issues/>
      <PrTable/>
      <Milestones/>
    </Container>
    )
  }
}

<<<<<<< HEAD
const mapStateToProps = state => {
  return {
    orgs: state.orgs,
    issues: state.issues,
  }
}
=======
const Dashboard = () => (
    <Container>
      <Grid padded>
      <Grid.Column floated='left' width={4}>
=======
export const Dashboard = () => (
  <Container>
    <Grid>
      <Grid.Column floated="left" width={4}>
>>>>>>> 8dc7899... removed MSTP's where uneeded, wrote test for components ready for pr, limited scoped of PR  via .gitignore dashboard feature
=======
export const Dashboard = () => (
  <Container>
    <Grid padded>
      <Grid.Column floated="left" width={4}>
>>>>>>> 02a66ea... Adding with some linting errors addressed
        <Issues />
      </Grid.Column>
      <Grid.Column floated="right" width={4}>
        <Milestones />
      </Grid.Column>
    </Grid>
<<<<<<< HEAD
        <PrTable />
        <LineChart />
    </Container>
=======
    <PrTable />
  </Container>
>>>>>>> 8dc7899... removed MSTP's where uneeded, wrote test for components ready for pr, limited scoped of PR  via .gitignore dashboard feature
);
>>>>>>> df38d77... Adding working orgs page

<<<<<<< HEAD
const mapDispatchToProps = dispatch => bindActionCreators ({
  retrieveOrgs
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
=======
=======
import './Dashboard.css';

const Dashboard = () => (
  <Container>
    <Issues />
    <PrTable />
    <Milestones />
  </Container>
);

<<<<<<< HEAD
const mapStateToProps = state => ({
  orgs: state.orgs,
  issues: state.issues,
});

>>>>>>> edbe0e0... fml
// const mapDispatchToProps = dispatch => bindActionCreators({
//   retrieveOrgs,
// }, dispatch);

export default connect(
  mapStateToProps,
<<<<<<< HEAD
>>>>>>> d1d9951... adding fixed dashboard view
=======
>>>>>>> edbe0e0... fml
)(Dashboard);
=======
export default Dashboard;
>>>>>>> 8dc7899... removed MSTP's where uneeded, wrote test for components ready for pr, limited scoped of PR  via .gitignore dashboard feature
