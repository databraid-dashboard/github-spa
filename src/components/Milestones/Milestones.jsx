import React, { Component } from 'react';
import './Milestones.css';
import { Card, Feed, List } from 'semantic-ui-react';
import Milestone from '../Milestone/Milestone.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { retrieveMilestones } from '../../actions/milestonesActions';

class Milestones extends Component{

  componentDidMount(){
    this.props.retrieveMilestones();
  }

  milestoneComponents = (milestonesIds) => {
    return milestonesIds.map(id => (
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
  retrieveMilestones
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Milestones);
