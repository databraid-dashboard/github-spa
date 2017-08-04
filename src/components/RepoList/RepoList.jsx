<<<<<<< HEAD
import React, {Component} from 'react';
import { List } from 'semantic-ui-react';
import Repo from '../Repo/Repo.jsx';
import './RepoList.css'
import {retrieveRepos} from '../../actions/orgActions';
=======
import React, { Component } from 'react';
import { Header, Icon, Image, Grid, List } from 'semantic-ui-react';
>>>>>>> 2c48835... Adding repo view
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
<<<<<<< HEAD

class RepoList extends Components{

  componentDidMount(){
    this.props.retreiveRepos();
=======
import PropTypes from 'prop-types';
import { retrieveRepos } from '../../actions/repoActions';
import Repo from '../Repo/Repo';
import './RepoList.css';

class RepoList extends Component {
  componentDidMount() {
<<<<<<< HEAD
    // this.props.retrieveRepos();
>>>>>>> d1d9951... adding fixed dashboard view
=======
    this.props.retrieveRepos();
>>>>>>> 2c48835... Adding repo view
  }

  repoComponents = (repoIds) => {
    return repoIds.map(id => {
      <Repo key={id} repoId={id} />
    })
  }

  render(){
    return (
<<<<<<< HEAD
      <List>
        {this.props.repoComponents(this.props.repoIds)}
      </List>
    )
=======
      <Grid centered padded>
        <Grid.Column width={8}>
          <Header as='h2' icon textAlign='center'>
            <Icon name='github'/>
            <Header.Content>
              Which repository are you interested in?
            </Header.Content>
          </Header>
              <List animated divided relaxed size='huge'>
            {this.repoComponents(this.props.repoIds)}
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
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);
