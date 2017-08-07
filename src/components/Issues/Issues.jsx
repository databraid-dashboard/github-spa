import React from 'react';
import './Issues.css'
<<<<<<< HEAD
import { Card, Feed, List, Label } from 'semantic-ui-react';

const Issues = ({}) => (
  <Card>
    <Card.Content>
      <Card.Header className="ui center aligned">
        Git Issues
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <List divided relaxed>
<<<<<<< HEAD
          <List.Item>
=======
          <Cards />
          <Cards />
          <Cards />
          const cardComponents =
          {/* <List.Item>
>>>>>>> 7e05dfe... mapped store, state, readme, mockAPI calls, and began wiring up components
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
          </List.Item>
        </List>
      </Feed>
    </Card.Content>
  </Card>
<<<<<<< HEAD
)
=======
  return (
    <div>
=======
import { Card, Feed, List } from 'semantic-ui-react';
import Issue from '../Issue/Issue.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {retrieveIssues} from '../../actions/issueActions';

export class Issues extends Component{

  componentDidMount(){
    this.props.retrieveIssues();
  }

  issueComponents = (issuesIds) => {
    return issuesIds.sort((a,b)=> {
      return a-b;
    }).map(id => (
        <Issue key={id} issueId={id} />
    ))
  }

  render() {
    if (this.props.loadingIssues) {
      console.log('loading issues');
      return (
        <div>Loading Issues</div>
      )
    }
    return (
      <Card>
        <Card.Content>
          <Card.Header className="ui center aligned">
            Git Issues
          </Card.Header>
        </Card.Content>
        <Card.Content>
            <List divided relaxed>
              {this.issueComponents(this.props.issuesIds)}
            </List>
        </Card.Content>
      </Card>
    )
  }
};

export const mapStateToProps = state => {
    return {
      issuesIds: state.issues.ids,
      loadingIssues: state.loadingIssues
    }
}
>>>>>>> c317919... Adding Issues component

<<<<<<< HEAD
    </div>
  )
);
>>>>>>> 7e05dfe... mapped store, state, readme, mockAPI calls, and began wiring up components
=======
export const mapDispatchToProps = dispatch => bindActionCreators ({
  retrieveIssues
}, dispatch);
>>>>>>> dab0224... added loading feature, wrote tests

export default Issues;
