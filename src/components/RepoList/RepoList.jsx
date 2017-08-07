import React, { Component } from 'react';
import { Header, Icon, Grid, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { retrieveRepos } from '../../actions/repoActions';
import Repo from '../Repo/Repo';
import './RepoList.css';

function repoComponents(repoIds) {
  return repoIds.map(id => <Repo key={id} repoId={id} />);
}

export class RepoList extends Component {
  componentDidMount() {
    this.props.retrieveRepos();
  }


  render() {
    if (this.props.repoIds === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <Grid centered padded>
        <Grid.Column width={8}>
          <Header as="h2" icon textAlign="center">
            <Icon name="github" />
            <Header.Content>
              Which repository are you interested in?
            </Header.Content>
          </Header>
          <List animated divided relaxed size="huge">
            {repoComponents(this.props.repoIds)}
          </List>
        </Grid.Column>
      </Grid>
    );
  }
}

RepoList.propTypes = {
  // repoComponents: PropTypes.func.isRequired,
  retrieveRepos: PropTypes.func.isRequired,
  repoIds: PropTypes.number.isRequired,
};

export const mapStateToProps = state => ({
  repoIds: state.repos.ids,
  reposById: state.repos.reposById,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    retrieveRepos,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepoList);
