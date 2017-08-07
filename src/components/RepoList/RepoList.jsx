<<<<<<< HEAD
<<<<<<< HEAD
import React, {Component} from 'react';
import { List } from 'semantic-ui-react';
import Repo from '../Repo/Repo.jsx';
import './RepoList.css'
import {retrieveRepos} from '../../actions/orgActions';
=======
import React, { Component } from 'react';
<<<<<<< HEAD
import { Header, Icon, Image, Grid, List } from 'semantic-ui-react';
>>>>>>> 2c48835... Adding repo view
=======
import { Header, Icon, Grid, List } from 'semantic-ui-react';
>>>>>>> 02a66ea... Adding with some linting errors addressed
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
<<<<<<< HEAD

class RepoList extends Components{

  componentDidMount(){
    this.props.retreiveRepos();
=======
import PropTypes from 'prop-types';
import { retrieveRepos } from '../../actions/repoActions';
=======
import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// import { retrieveRepos } from '../../actions/orgActions';
>>>>>>> edbe0e0... fml
import Repo from '../Repo/Repo';
import './RepoList.css';

function repoComponents(repoIds) {
  return repoIds.map(id => <Repo key={id} repoId={id} />);
}

export class RepoList extends Component {
  componentDidMount() {
<<<<<<< HEAD
<<<<<<< HEAD
    // this.props.retrieveRepos();
>>>>>>> d1d9951... adding fixed dashboard view
=======
    this.props.retrieveRepos();
>>>>>>> 2c48835... Adding repo view
  }

<<<<<<< HEAD
  repoComponents = (repoIds) => {
    return repoIds.map(id => {
      <Repo key={id} repoId={id} />
    })
  }

  render(){
=======

  render() {
    if (this.props.repoIds === undefined) {
      return <div>Loading...</div>;
    }
>>>>>>> 02a66ea... Adding with some linting errors addressed
    return (
<<<<<<< HEAD
      <List>
        {this.props.repoComponents(this.props.repoIds)}
      </List>
    )
=======
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
>>>>>>> 2c48835... Adding repo view
  }
};

const mapStateToProps = state => {
  return {
    repoIds: state.repos.ids,
    reposById: state.repos.reposById
  }
}

const mapDispatchToProps = dispatch =>
<<<<<<< HEAD
  bindActionCreators ({
    retrieveRepos
=======
  bindActionCreators({
<<<<<<< HEAD
    // retrieveRepos,
>>>>>>> d1d9951... adding fixed dashboard view
=======
    retrieveRepos,
>>>>>>> 2c48835... Adding repo view
=======
    // this.props.retrieveRepos();
  }

  repoComponents(repoIds) {
    return repoIds.map(id => <Repo key={id} repoId={id} />);
  }

  render() {
    return (
      <List>
        {this.props.repoComponents(this.props.repoIds)}
      </List>
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
    // retrieveRepos,
>>>>>>> edbe0e0... fml
  }, dispatch);

export default connect(
  mapStateToProps,
<<<<<<< HEAD
  mapDispatchToProps
=======
  mapDispatchToProps,
>>>>>>> edbe0e0... fml
)(RepoList);
