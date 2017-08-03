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
    return (
      <Card>
        <Card.Content>
          <Card.Header className="ui center aligned">
            Milestones
          </Card.Header>
        </Card.Content>
        {milestoneComponents(this.props.milestonesIds)}
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

<<<<<<< HEAD
export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    retrieveMilestones,
  }, dispatch);
=======
const mapDispatchToProps = dispatch =>
bindActionCreators ({
  retrieveMilestones
}, dispatch);
>>>>>>> Adding completed PR table and Milestones components

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Milestones);
