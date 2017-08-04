import React from 'react';
import { Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { retrieveOrgs } from './actions/orgActions';
import { connect } from 'react-redux';
import Issues from './Issues/Issues';
import PrTable from './PrTable/PrTable';
import Milestones from './Milestones/Milestones';
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

const mapDispatchToProps = dispatch => bindActionCreators({
  retrieveOrgs,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
