import React, { Component } from 'react';
import './Milestones.css';
import { Card, Feed, List } from 'semantic-ui-react';
import Milestone from '../MilestonesRow/MilestonesRow.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { retrieveMilestones } from '../../actions/milestonesActions';

class Milestones extends Component{

  componentDidMount(){
    this.props.retrieveMilestones();
  }

  milestoneComponents = (milestoneIds) => {
    return milestoneIds.map(id => (
      <Milestone key={id} milestoneId={id} />
    ))
  }

  render() {
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
              {this.milestoneComponents(this.props.milestonesIds)}
            </List>
          </Feed>
        </Card.Content>
      </Card>
    )
  }
};

const mapStateToProps = state => {
  return {
    milestonesIds: state.milestones.ids,
    milestonesByID: state.milestones.milestonesByID
  }
}

const mapDispatchToProps = dispatch =>
bindActionCreators ({
  retrieveMilestonesgit 
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Milestones);
