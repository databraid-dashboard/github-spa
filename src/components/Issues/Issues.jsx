import React, { Component } from 'react';
import './Issues.css'
import { Card, Feed, List } from 'semantic-ui-react';
import Issue from '../Issue/Issue.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {retrieveIssues} from '../../actions/issueActions';

class Issues extends Component{

  componentDidMount(){
    this.props.retrieveIssues();
  }

  issueComponents = (issueIds) => {
    return issueIds.map(id => (
        <Issue key={id} issueId={id} />
    ))
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header className="ui center aligned">
            Git Issues
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <List divided relaxed>
              {this.issueComponents(this.props.issuesIds)}
            </List>
          </Feed>
        </Card.Content>
      </Card>
    )
  }
};

const mapStateToProps = state => {
    return {
      issuesIds: state.issues.ids,
      issuesById : state.issues.issuesById
    }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  retrieveIssues
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Issues);
