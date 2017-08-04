import React, { Component } from 'react';
import './Issues.css';
import { Card, Feed, List, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import Issue from '../Issue/Issue.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { retrieveIssues } from '../../actions/issueActions';
import './Issues.css';

export class Issues extends Component {
  componentDidMount() {
    this.props.retrieveIssues();
  }

  issueComponents(issuesIds) {
    return issuesIds.sort((a, b) => a - b).map(id => (
      <Issue key={id} issueId={id} />
    ));
  }

  render() {
    console.log('this.props.loadingIssues', this.props);
    if (this.props.loadingIssues) {
      return (
        <Card>
          <Card.Content>
            <Card.Header className="ui center aligned">
              Git Issues
            </Card.Header>
            <Feed>
              <Segment>
                <Dimmer active inverted>
                  <Loader inverted>Loading</Loader>
                </Dimmer>

                <Image src="/assets/images/wireframe/short-paragraph.png" />
              </Segment>
            </Feed>
          </Card.Content>
        </Card>
      );
    }
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
    );
  }
}

Issues.propTypes = {
  retrieveIssues: PropTypes.func.isRequired,
  issuesIds: PropTypes.number.isRequired,
  loadingIssues: PropTypes.bool.isRequired,
};


export const mapStateToProps = state => ({
  issuesIds: state.issues.ids,
  loadingIssues: state.issues.loadingIssues,
});


export const mapDispatchToProps = dispatch => bindActionCreators({
  retrieveIssues,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Issues);
