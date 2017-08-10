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

<<<<<<< HEAD
<<<<<<< HEAD
  prComponents(prIds) {
<<<<<<< HEAD
    return prIds.sort((a, b) => a - b).map(id => <PrTableRow key={id} prId={id} />);
=======
    return prIds.map(id => <PrTableRow key={id} prId={id} />);
>>>>>>> edbe0e0... fml
  }
=======
>>>>>>> 02a66ea... Adding with some linting errors addressed

=======
>>>>>>> b56b9a4... Adding conditional views
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
<<<<<<< HEAD
  prIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  loadingPrTable: PropTypes.bool.isRequired,
=======
  loadingPrTable: PropTypes.bool,
  userName: PropTypes.string.isRequired,
  orgName: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
  prsByRepo: PropTypes.objectOf(PropTypes.array),
};

PrTable.defaultProps = {
  loadingPrTable: false,
  prsByRepo: {},
>>>>>>> 8213532... Frontend/Backend sync
};

<<<<<<< HEAD
export const mapStateToProps = state => ({
  prsByRepo: state.pullRequests.prsByRepo,
  prsById: state.pullRequests.prsById,
  loadingPrTable: state.loadingPrTable,
  userName: state.currentPage.userName,
  orgName: state.currentPage.selectedOrgName,
});
=======
export const mapStateToProps = state => {
  console.log(state.pullRequests, "state.pullRequests")

   return {
  prIds: state.pullRequests.ids,
  prsById: state.pullRequests.prsByID,
  loadingPrTable: state.loadingPrTable,
}
};
>>>>>>> edbe0e0... fml

export const mapDispatchToProps = dispatch => bindActionCreators({
  retrievePrs,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrTable);
