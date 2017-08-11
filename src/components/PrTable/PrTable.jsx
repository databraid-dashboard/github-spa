/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import PrTableRow from '../PrTableRow/PrTableRow';
import { retrievePrs } from '../../actions/prActions';
import './PrTable.css';
import injectWidgetId from '../../utils/utils';

function prComponents(prs, repo) {
  if (prs && prs[repo]) {
    return prs[repo].map(id => <PrTableRow key={id} prId={id} />);
  }
  return '';
}

export class PrTable extends Component {
  componentDidMount() {
    this.props.retrievePrs(this.props.userName, this.props.orgName, this.props.repoName);
  }

  render() {
    if (this.props.loadingPrTable) {
      return <div>Loading Pull Requests</div>;
    }

    return (
      <Card>
        <Card.Content>
          <Card.Header className="ui center aligned">Pull Requests</Card.Header>
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

// export const mapStateToProps = state => ({
//   prsByRepo: state.pullRequests.prsByRepo,
//   prsById: state.pullRequests.prsById,
//   loadingPrTable: state.loadingPrTable,
//   userName: state.currentPage.userName,
//   orgName: state.currentPage.selectedOrgName,
// });

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const prsByRepo = state.widgets.byId[id].pullRequests.prsByRepo;
  const prsById = state.widgets.byId[id].pullRequests.prsById;
  const loadingPrTable = state.widgets.byId[id].loadingPrTable;
  const userName = state.widgets.byId[id].currentPage.userName;
  const orgName = state.widgets.byId[id].currentPage.selectedOrgName;

  return {
    prsByRepo,
    prsById,
    loadingPrTable,
    userName,
    orgName,
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      retrievePrs,
    },
    dispatch,
  );

export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(PrTable));
