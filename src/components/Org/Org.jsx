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
<<<<<<< HEAD
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
=======
export const Org = ({ avatarUrl, orgName, reposUrl }) => (
>>>>>>> 02a66ea... Adding with some linting errors addressed
=======
export const Org = ({ avatarUrl, orgName }) => (
>>>>>>> 2f2a056... Adding with fewer linting errors
  <Grid.Column>
    <Image src={avatarUrl} size="small" />
    <List.Item as="a">{orgName}</List.Item>
  </Grid.Column>
);

export const mapStateToProps = (state, { orgId }) => {
  const org = state.orgs.orgsById[orgId];
>>>>>>> 2c48835... Adding repo view
=======
import { Image, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Org.css';

export const Org = ({ avatarUrl, orgName, reposUrl }) => (
  <div>
    <Image src={avatarUrl} />
    <List.Item as="a">{orgName}</List.Item>
  </div>
);

<<<<<<< HEAD
const mapStateToProps = (state, { orgId }) => {
  const org = state.orgs.orgsByID[orgId];
>>>>>>> edbe0e0... fml
=======
export const mapStateToProps = (state, { orgId }) => {
  const org = state.orgs.orgsById[orgId];
>>>>>>> 88f4b03... Added passing tests on <Org and <Orgs

  const { avatarUrl, orgName } = org;

  return {
    avatarUrl,
    orgName,
<<<<<<< HEAD
<<<<<<< HEAD
    reposUrl
  }
}

export default connect(
  mapStateToProps
=======
    reposUrl,
=======
>>>>>>> 2f2a056... Adding with fewer linting errors
  };
};

Org.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  orgName: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
>>>>>>> edbe0e0... fml
)(Org);
