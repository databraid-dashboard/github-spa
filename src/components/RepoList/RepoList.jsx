import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { retrieveRepos } from '../../actions/orgActions';
import Repo from '../Repo/Repo';
import './RepoList.css';

class RepoList extends Component {
  componentDidMount() {
    this.props.retrieveRepos();
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
  repoComponents: PropTypes.func.isRequired,
  retrieveRepos: PropTypes.func.isRequired,
  repoIds: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  repoIds: state.repos.ids,
  reposById: state.repos.reposById,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    retrieveRepos,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepoList);
