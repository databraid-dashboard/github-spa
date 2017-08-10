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
  if(prs && prs[repo]){ return prs[repo].map(id =>
    <PrTableRow prId={id} />
  )} else {
    return ''
  }
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
  prIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  loadingPrTable: PropTypes.bool,
};

PrTable.defaultProps = {
  loadingPrTable: false,
};

export const mapStateToProps = state => ({
  prsByRepo: state.pullRequests.prsByRepo,
  prsById: state.pullRequests.prsById,
  prIds: state.pullRequests.ids,
  loadingPrTable: state.loadingPrTable,
  userName: state.currentPage.userName,
  orgName: state.currentPage.selectedOrgName,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  retrievePrs,

export const mapDispatchToProps = dispatch => bindActionCreators({
  retrievePrs,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrTable);
