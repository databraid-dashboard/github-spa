import React, { Component } from 'react';
import './Milestones.css';
import { Card, Feed, List } from 'semantic-ui-react';
import Milestone from '../Milestones/Milestones.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { retrieveMilestones } from '../../actions/milestonesActions';

export class Milestones extends Component{

  componentDidMount(){
    this.props.retrieveMilestones();
  }

  milestoneComponents = (milestoneIds) => {
    return milestoneIds.map(id => (
      <div>
        <Milestone key={id} milestoneId={id} />
      </div>
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
        <Card.Content>
          <Feed>
            <List divided relaxed>
              <div>
                {()=>{this.milestoneComponents(this.props.milestonesIds)}}
              </div>
            </List>
          </Feed>
        </Card.Content>
      </Card>
    )
  }
};

export const mapStateToProps = state => {
  return {
    milestonesIds: state.milestones.ids,
    milestonesByID: state.milestones.milestonesByID,
    loadingMilestones: state.loadingMilestones
  }
}

export const mapDispatchToProps = dispatch =>
bindActionCreators ({
  retrieveMilestones
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Milestones);
