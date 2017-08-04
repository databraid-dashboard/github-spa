import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
// import { retrieveOrgs } from './actions/orgActions';
import { connect } from 'react-redux';
import Issues from '../Issues/Issues';
import PrTable from '../PrTable/PrTable';
import Milestones from '../Milestones/Milestones';
import './Dashboard.css';

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

const mapStateToProps = state => {
  return {
    orgs: state.orgs,
    issues: state.issues,
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//   retrieveOrgs,
// }, dispatch);

export default connect(
  mapStateToProps,
)(Dashboard);
