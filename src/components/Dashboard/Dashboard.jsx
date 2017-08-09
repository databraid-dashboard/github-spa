import Issues from './Issues/Issues.jsx';
import PrTable from './PrTable/PrTable.jsx';
import Milestones from './Milestones/Milestones.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import { renderRepos } from '../../actions/renderActions';
import { Container, Grid, Header, Icon, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Dashboard.css';

export const Dashboard = ({ repoName, renderRepos, orgName }) => (
  <div>

    <Button icon onClick={() => renderRepos(orgName)}>
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

Dashboard.propTypes = {
  repoName: PropTypes.string,
  renderRepos: PropTypes.func.isRequired,
  orgName: PropTypes.string,
};

Dashboard.defaultProps = {
  repoName: null,
  orgName: null,
};

const mapStateToProps = state => ({
  repoName: state.currentPage.repoName,
  orgName: state.currentPage.selectedOrgName,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  renderRepos,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
