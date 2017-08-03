<<<<<<< HEAD
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { retrieveMilestones } from '../../actions/milestonesActions';
import Milestone from '../Milestone/Milestone';
import './Milestones.css';

function milestoneComponents(milestonesIds) {
  return milestonesIds.map(id => (
    <Milestone key={id} milestoneId={id} />
  ));
}

export class Milestones extends Component {
  componentDidMount() {
    this.props.retrieveMilestones();
  }

  render() {
    if (this.props.loadingMilestones) {
      return (
        <div>Loading Milestones</div>
      );
    }
=======
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
>>>>>>> Adding PR Table and Milestones Components
    return (
      <Card>
        <Card.Content>
          <Card.Header className="ui center aligned">
            Milestones
          </Card.Header>
        </Card.Content>
<<<<<<< HEAD
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

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    retrieveMilestones,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
=======
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
>>>>>>> Adding PR Table and Milestones Components
)(Milestones);
