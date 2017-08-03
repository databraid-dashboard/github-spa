import React from 'react';
import './Org.css'
import { Image, List } from 'semantic-ui-react';
import { connect } from 'react-redux';

const Org = ({ avatarUrl, orgName, reposUrl, orgId}) => (
    <div>
      <Image src={avatarUrl}/>
      <List.Item as='a'>{orgName}</List.Item>
    </div>
)

const mapStateToProps = (state, { orgId }) => {

  const org = state.orgs.orgsByID[orgId];

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
