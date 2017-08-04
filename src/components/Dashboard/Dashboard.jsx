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
import Issues from '../Issues/Issues';
import PrTable from '../PrTable/PrTable';
import Milestones from '../Milestones/Milestones';
<<<<<<< HEAD
import LineChart from '../LineChart/LineChart';
import './Dashboard.css';
>>>>>>> d1d9951... adding fixed dashboard view

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
        <Issues />
      </Grid.Column>
      <Grid.Column floated='right' width={4}>
        <Milestones />
      </Grid.Column>
    </Grid>
        <PrTable />
        <LineChart />
    </Container>
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
