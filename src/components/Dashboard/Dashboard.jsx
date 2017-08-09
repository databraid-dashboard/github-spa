/* eslint-disable import/no-named-as-default, no-shadow, consistent-return */
import React from 'react';
import { Container, Grid, Header, Icon, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { renderRepos } from '../../actions/renderActions';
import Issues from '../Issues/Issues';
import PrTable from '../PrTable/PrTable';
import Milestones from '../Milestones/Milestones';
import LineChart from '../LineChart/LineChart';
import './Dashboard.css';

const Dashboard = () => (
  <Container>
    <Issues />
    <PrTable />
    <Milestones />
  </Container>
);

Dashboard.propTypes = {
  repoName: PropTypes.string,
  currentPage: PropTypes.string.isRequired,
  renderRepos: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {
  repoName: null,
};

const mapStateToProps = state => ({
  repoName: state.currentPage.repoName,
  currentPage: state.currentPage.render,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  renderRepos,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
