import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import './Org.css'
import { Image, List } from 'semantic-ui-react';
=======
import { Grid, Image, List } from 'semantic-ui-react';
>>>>>>> 2c48835... Adding repo view
import { connect } from 'react-redux';

<<<<<<< HEAD
const Org = ({ avatarUrl, orgName, reposUrl, orgId}) => (
    <div>
      <Image src={avatarUrl}/>
      <List.Item as='a'>{orgName}</List.Item>
    </div>
)

const mapStateToProps = (state, { orgId }) => {

  const org = state.orgs.orgsByID[orgId];
=======
const Org = ({ avatarUrl, orgName, reposUrl }) => (
  <Grid.Column>
    <Image src={avatarUrl} size='small'/>
    <List.Item as='a'>{orgName}</List.Item>
  </Grid.Column>
);

const mapStateToProps = (state, { orgId }) => {
  const org = state.orgs.orgsById[orgId];
>>>>>>> 2c48835... Adding repo view
=======
import { Image, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Org.css';

const Org = ({ avatarUrl, orgName, reposUrl }) => (
  <div>
    <Image src={avatarUrl} />
    <List.Item as="a">{orgName}</List.Item>
  </div>
);

const mapStateToProps = (state, { orgId }) => {
  const org = state.orgs.orgsByID[orgId];
>>>>>>> edbe0e0... fml

  const { avatarUrl, orgName, reposUrl } = org;

  return {
    avatarUrl,
    orgName,
<<<<<<< HEAD
    reposUrl
  }
}

export default connect(
  mapStateToProps
=======
    reposUrl,
  };
};

Org.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  orgName: PropTypes.string.isRequired,
  reposUrl: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
>>>>>>> edbe0e0... fml
)(Org);
