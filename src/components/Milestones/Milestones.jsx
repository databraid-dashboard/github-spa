/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { retrieveMilestones } from '../../actions/milestonesActions';
import Milestone from '../Milestone/Milestone';
import './Milestones.css';

function milestoneComponents(milestones, repo) {
  if (milestones && milestones[repo]) {
    return milestones[repo].map(id => <Milestone key={id} milestoneId={id} />,
    );
  }
  return '';
}

export class Milestones extends Component {
  componentDidMount() {
    this.props.retrieveMilestones(this.props.userName, this.props.orgName, this.props.repoName);
  }

  render() {
    if (this.props.loadingMilestones) {
      return (
        <div>Loading Milestones</div>
      );
    }
    return (
      <Card>
        <Card.Content>
          <Card.Header className="ui center aligned">
            Milestones
          </Card.Header>u
        </Card.Content>
        {milestoneComponents(this.props.milestonesByRepo, this.props.repoName)}
      </Card>
    );
  }
}

Milestones.propTypes = {
  retrieveMilestones: PropTypes.func.isRequired,
  loadingMilestones: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  orgName: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
  milestonesByRepo: PropTypes.objectOf(PropTypes.array).isRequired,
};

Milestones.defaultProps = {
  loadingMilestones: false,
  milestonesByRepo: {},
  userName: '',
  orgName: '',
  repoName: '',
};

export const mapStateToProps = state => ({
  milestonesByRepo: state.milestones.milestonesByRepo,
  milestonesById: state.milestones.milestonesById,
  loadingMilestones: state.loadingMilestones,
  userName: state.currentPage.userName,
  orgName: state.currentPage.selectedOrgName,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    retrieveMilestones,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Milestones);
