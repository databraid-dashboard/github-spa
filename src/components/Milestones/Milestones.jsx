import React, { Component } from 'react';
import './Milestones.css';
import { Card, Feed, List } from 'semantic-ui-react';
import Milestone from '../Milestone/Milestone.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { retrieveMilestones } from '../../actions/milestonesActions';

export class Milestones extends Component{

  componentDidMount(){
    this.props.retrieveMilestones();
  }

  milestoneComponents = (milestonesIds) => {
    return milestonesIds.map(id => (
      <Milestone key={id} milestoneId={id} />
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
                {this.milestoneComponents(this.props.milestonesIds)}
              </div>
            </List>
          </Feed>
        </Card.Content>
      </Card>
    );
  }
}

Milestones.propTypes = {
  retrieveMilestones: PropTypes.func.isRequired,
  loadingMilestones: PropTypes.bool,
  milestonesIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

Milestones.defaultProps = {
  loadingMilestones: false,
};

export const mapStateToProps = state => ({
  milestonesIds: state.milestones.ids,
  milestonesById: state.milestones.milestonesById,
  loadingMilestones: state.loadingMilestones,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    retrieveMilestones,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Milestones);
