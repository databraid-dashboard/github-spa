<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======
/* eslint-disable import/no-named-as-default, no-shadow, consistent-return */
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
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
=======
import { Container, Grid, Header, Icon, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { renderRepos } from '../../actions/renderActions';
import Issues from '../Issues/Issues';
import PrTable from '../PrTable/PrTable';
import Milestones from '../Milestones/Milestones';
>>>>>>> 564c283... Fixing warning messages from tests
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
<<<<<<< HEAD
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

<<<<<<< HEAD
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
=======
export const Dashboard = ({repoName, currentPage, renderRepos }) => {
=======
export const Dashboard = ({ repoName, currentPage, renderRepos }) => {
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
  if (currentPage !== 'dashboard') {
    return <div />;
  }
  if (currentPage === 'dashboard') {
    return (
      <div>
        <Button icon padded onClick={() => renderRepos()}>
=======
export const Dashboard = ({ repoName, currentPage, renderRepos, orgName }) => {
    return (
      <div>
        <Button icon onClick={() => renderRepos(orgName)}>
>>>>>>> e19f169... Adding syced app
          <Icon name="arrow left" />
        </Button>
        <Container>
          <Grid padded>
            <Header as="h2" icon textAlign="center">
              <Icon name="github" />
              <Header.Content>
                {repoName}
              </Header.Content>
            </Header>
            <Grid.Row columns={3}>
              <Grid.Column>
                <PrTable repoName={repoName} />
              </Grid.Column>
              <Grid.Column>
                <Issues repoName={repoName} />
              </Grid.Column>
              <Grid.Column>
                <Milestones repoName={repoName} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
};

Dashboard.propTypes = {
  repoName: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
  renderRepos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  repoName: state.currentPage.repoName,
  currentPage: state.currentPage.render,
  orgName: state.currentPage.selectedOrgName,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  renderRepos,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
>>>>>>> 564c283... Fixing warning messages from tests
