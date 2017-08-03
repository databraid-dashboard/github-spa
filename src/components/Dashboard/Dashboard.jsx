import React, {Component} from 'react';
import './Dashboard.css';
import Issues from './Issues/Issues.jsx';
import PrTable from './PrTable/PrTable.jsx'
import Milestones from './Milestones/Milestones.jsx'
import { Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import {retrieveOrgs} from './actions/orgActions';
import {connect} from 'react-redux';

class Dashboard extends Component{

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

const mapDispatchToProps = dispatch => bindActionCreators ({
  retrieveOrgs
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
