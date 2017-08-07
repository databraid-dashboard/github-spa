import React, { Component } from 'react';
import './Milestones.css';
import { Card, Feed, List } from 'semantic-ui-react';
<<<<<<< HEAD
import Milestone from '../Milestone/Milestone.jsx';
=======
import Milestone from '../Milestones/Milestones.jsx';
>>>>>>> 0365ab2... fixed related milestone: errors, loading feature, tests, must re-update snapshot, not rendering
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { retrieveMilestones } from '../../actions/milestonesActions';

export class Milestones extends Component{

  componentDidMount(){
    this.props.retrieveMilestones();
  }

<<<<<<< HEAD
  milestoneComponents = (milestonesIds) => {
    return milestonesIds.map(id => (
      <Milestone key={id} milestoneId={id} />
=======
  milestoneComponents = (milestoneIds) => {
    return milestoneIds.map(id => (
      <div>
        <Milestone key={id} milestoneId={id} />
      </div>
>>>>>>> 0365ab2... fixed related milestone: errors, loading feature, tests, must re-update snapshot, not rendering
    ))
  }

  render() {

    if (this.props.loadingMilestones) {

      return (
        <div>Loading Milestones</div>
      )
    }
    return (
      <Card>
        <Card.Content>
          <Card.Header className="ui center aligned">
            Milestones
          </Card.Header>
        </Card.Content>
<<<<<<< HEAD
        <Card.Content>
          <Feed>
            <List divided relaxed>
<<<<<<< HEAD
              <div>
<<<<<<< HEAD
                {()=>{this.milestoneComponents(this.props.milestonesIds)}}
=======
                {this.milestoneComponents(this.props.milestonesIds)}
>>>>>>> d1d9951... adding fixed dashboard view
              </div>
=======
                {this.milestoneComponents(this.props.milestonesIds)}
>>>>>>> df38d77... Adding working orgs page
            </List>
          </Feed>
        </Card.Content>
=======
              {this.milestoneComponents(this.props.milestonesIds)}
>>>>>>> 4def070... Adding percent complete feature
      </Card>
    )
  }
};

<<<<<<< HEAD
export const mapStateToProps = state => {
  return {
    milestonesIds: state.milestones.ids,
    milestonesByID: state.milestones.milestonesByID,
    loadingMilestones: state.loadingMilestones
  }
}
=======
export const mapStateToProps = state => ({
  milestonesIds: state.milestones.ids,
  milestonesById: state.milestones.milestonesById,
  loadingMilestones: state.loadingMilestones,
});
>>>>>>> 2c48835... Adding repo view

export const mapDispatchToProps = dispatch =>
bindActionCreators ({
  retrieveMilestones
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Milestones);
