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
import { connect } from 'react-redux';
import Issues from '../Issues/Issues';
import PrTable from '../PrTable/PrTable';
import Milestones from '../Milestones/Milestones';
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
// const mapDispatchToProps = dispatch => bindActionCreators({
//   retrieveOrgs,
// }, dispatch);

export default connect(
  mapStateToProps,
>>>>>>> d1d9951... adding fixed dashboard view
)(Dashboard);
