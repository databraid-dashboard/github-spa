/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { retrieveMilestones } from '../../actions/milestonesActions';
import Milestone from '../Milestone/Milestone';
import injectWidgetId from '../../utils/utils';
import './Milestones.css';

function milestoneComponents(milestones, repo) {
  if (milestones && milestones[repo]) {
    return milestones[repo].map(id => <Milestone key={id} milestoneId={id} />);
  }
  return '';
}

export class Milestones extends Component {
  componentDidMount() {
    this.props.retrieveMilestones(this.props.userName, this.props.orgName, this.props.repoName);
  }

  render() {
    if (this.props.loadingMilestones) {
      return <div>Loading Milestones</div>;
    }
    return (
      <Card>
        <Card.Content>
          <Card.Header className="ui center aligned">Milestones</Card.Header>
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

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const milestonesByRepo = state.widgets.byId[id].milestones.milestonesByRepo;
  const milestonesById = state.widgets.byId[id].milestones.milestonesById;
  const loadingMilestones = state.widgets.byId[id].loadingMilestones;
  const userName = state.widgets.byId[id].currentPage.userName;
  const orgName = state.widgets.byId[id].currentPage.selectedOrgName;

  return {
    milestonesByRepo,
    milestonesById,
    loadingMilestones,
    userName,
    orgName,
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      retrieveMilestones,
    },
    dispatch,
  );

export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(Milestones));
