import React, { Component } from 'react';
import './Issues.css'
import { Card, Feed, List } from 'semantic-ui-react';
import Cards from '../Cards/Cards.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {retrieveIssues} from '../../actions/issueActions'

class Issues extends Component{

  componentDidMount(){
    this.props.retrieveIssues();
  }

  cardComponents = () => {
    this.props.issuesById.map((issue, idx) => (
      <div>
        <Cards key={this.props.issuesIds[idx]} issueId={this.props.issuesIds[idx]} title={ issue.title} repoIssueNumber={issue.repoIssueNumber} label={issue.labels} assignedTo={issue.assignedTo}/>
      </div>
    ))
  }

  render() {
    console.log(this.props.issuesById, 'issuesby idss');
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
              {this.cardComponents}
              {/* <List.Item>
                <List.Content>
                <List.Header>#1 Git Issue One</List.Header><Label.Group tag><div className="us tiny label"><Label>question</Label></div></Label.Group>
                <List.Description>Assigned To: Jenny</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
            <List.Content>
            <List.Header>#2 Git Issue One</List.Header><Label.Group tag><Label>bug</Label></Label.Group>
            <List.Description>Assigned To: Jenny</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
        <List.Content>
        <List.Header>#3 Git Issue One</List.Header><Label.Group tag><Label>help</Label></Label.Group>
        <List.Description>Assigned To: Jenny</List.Description>
      </List.Content>
    </List.Item> */}
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
