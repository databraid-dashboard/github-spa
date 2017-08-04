import React from 'react';
<<<<<<< HEAD
import './PrTableRow.css'
=======
>>>>>>> edbe0e0... fml
import { Table, Label, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './PrTableRow.css';

const getMergeableCheckbox = (able) => {
  if (able) {
    return (
      <div><Icon name="checkmark" size="big" color="green" /></div>
    );
  } else if (able === false) {
    return <div><Icon name="remove" size="big" color="red" /></div>;
  }
  return <div><Icon name="minus" size="big" color="violet" /></div>;
};

const getMergeableCheckbox = able => {
  if(able){
    return (
      <div><Icon name='checkmark' size='big' color='green'/></div>
    )
  } else if (able===false) {
    return <div><Icon name='remove' size='big' color='red'/></div>
  } else {
    return <div><Icon name='minus' size='big' color='violet' /></div>
  }
<<<<<<< HEAD
}
=======
  return <div><Icon name="minus" size="big" color="yellow" /></div>;
};
>>>>>>> df38d77... Adding working orgs page

const convertDate = (ISOdate) => {

  let date = new Date(ISOdate);
  let formatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };

  let dateString = date.toLocaleDateString('en-US', formatOptions);
  dateString = dateString.replace(',','')
                         .replace('PM','p.m.')
                         .replace('AM','a.m.');
  return dateString;
}

const PrTableRow = ({ created, mergeable, submittedBy, title }) => (
<<<<<<< HEAD
<<<<<<< HEAD
    <Table.Row>
      <Table.Cell textAlign='center'>{ title }</Table.Cell>
      <Table.Cell textAlign='center'>{ created }</Table.Cell>
      <Table.Cell textAlign='center'>{ submittedBy[0] }<div><Label size='mini' image={submittedBy[1]}/></div></Table.Cell>
      <Table.Cell textAlign='center'>{ getMergeableCheckbox(mergeable) }</Table.Cell>
    </Table.Row>
)
=======
  <Table.Row>
    <Table.Cell textAlign="center">{ title }</Table.Cell>
    <Table.Cell textAlign="center">{ convertDate(created) }</Table.Cell>
    <Table.Cell textAlign="center">{ submittedBy[0] }
      <div><Label size="mini" image={submittedBy[1]} /></div></Table.Cell>
    <Table.Cell textAlign="center">{getMergeableCheckbox(mergeable) }</Table.Cell>
=======
  <Table.Row>
    <Table.Cell textAlign="center">{ title }</Table.Cell>
    <Table.Cell textAlign="center">{ created }</Table.Cell>
    <Table.Cell textAlign="center">{ submittedBy[0] }
      <div><Label size="mini" image={submittedBy[1]} /></div></Table.Cell>
    <Table.Cell textAlign="center">{ getMergeableCheckbox(mergeable) }</Table.Cell>
>>>>>>> edbe0e0... fml
  </Table.Row>
);

PrTableRow.propTypes = {
  created: PropTypes.string.isRequired,
  mergeable: PropTypes.bool.isRequired,
  submittedBy: PropTypes.string.isRequired,
  title: PropTypes.number.isRequired,
};
<<<<<<< HEAD
>>>>>>> df38d77... Adding working orgs page
=======
>>>>>>> edbe0e0... fml

const mapStateToProps = (state, { prId }) => {
  const pr = state.pullRequests.prsById[prId];
  const { created, mergeable, submittedBy, title } = pr;
  return {
    created,
    mergeable,
    submittedBy,
    title,
  };
};

export default connect(
  mapStateToProps,
)(PrTableRow);
