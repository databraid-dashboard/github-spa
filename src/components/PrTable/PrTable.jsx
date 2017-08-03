<<<<<<< HEAD
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import PrTableRow from '../PrTableRow/PrTableRow';
import { retrievePrs } from '../../actions/prActions';
import './PrTable.css';


function prComponents(prs, repo) {
  if (prs && prs[repo]) {
    return prs[repo].map(id =>
      <PrTableRow key={id} prId={id} />,
    );
  }
  return '';
}

export class PrTable extends Component {
  componentDidMount() {
    this.props.retrievePrs(this.props.userName, this.props.orgName, this.props.repoName);
  }

  render() {
    if (this.props.loadingPrTable) {
      return (
        <div>Loading Pull Requests</div>
      );
    }
    return (
      <Card>
        <Card.Content>
          <Card.Header className="ui center aligned">
            Pull Requests
          </Card.Header>
        </Card.Content>
        {prComponents(this.props.prsByRepo, this.props.repoName)}
      </Card>
    );
  }
}

PrTable.propTypes = {
  retrievePrs: PropTypes.func.isRequired,
  loadingPrTable: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  orgName: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
  prsByRepo: PropTypes.objectOf(PropTypes.array),
};

PrTable.defaultProps = {
  loadingPrTable: false,
  prsByRepo: {},
  userName: '',
  orgName: '',
  repoName: '',

};

export const mapStateToProps = state => ({
  prsByRepo: state.pullRequests.prsByRepo,
  prsById: state.pullRequests.prsById,
  loadingPrTable: state.loadingPrTable,
  userName: state.currentPage.userName,
  orgName: state.currentPage.selectedOrgName,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  retrievePrs,
=======
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import './PrTable.css';
import PrTableRow from '../PrTableRow/PrTableRow.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { retrievePrs } from '../../actions/prActions';

class PrTable extends Component {

  componentDidMount(){
    this.props.retrievePrs();
  }

  prComponents = (prIds) => {
    return prIds.map(id => (
      <PrTableRow key={id} prId={id} />
    ))
  }

  render() {
    return (
      <Table celled fixed singleline>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='4' textAlign='center'>Pull Requests</Table.HeaderCell>
          </Table.Row>

          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Created</Table.HeaderCell>
            <Table.HeaderCell>Submitted By</Table.HeaderCell>
            <Table.HeaderCell>Meargeability</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.prComponents(this.props.prIds)}

        </Table.Body>
      </Table>
    )
  }
};

const mapStateToProps = state => {
  return {
    prIds: state.pullRequests.ids,
    prsById: state.pullRequests.prsByID
  }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  retrievePrs
>>>>>>> Adding PR Table and Milestones Components
}, dispatch);

export default connect(
  mapStateToProps,
<<<<<<< HEAD
  mapDispatchToProps,
=======
  mapDispatchToProps
>>>>>>> Adding PR Table and Milestones Components
)(PrTable);
