import React from 'react';
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
    <List.Item as="a">{orgName}</List.Item>
  </Grid.Column>
);

const mapStateToProps = (state, { orgId }) => {
  const org = state.orgs.orgsById[orgId];
>>>>>>> 2c48835... Adding repo view

  const { avatarUrl, orgName, reposUrl } = org;

  return {
    avatarUrl,
    orgName,
    reposUrl
  }
}

export default connect(
  mapStateToProps
)(Org);
