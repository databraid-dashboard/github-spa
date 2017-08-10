/* eslint-disable import/no-named-as-default, consistent-return */
import React, { Component } from 'react';
import { Header, Icon, Grid, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { renderLogin } from '../../actions/renderActions';
import { retrieveOrgs } from '../../actions/orgActions';
import Organizations from '../Organizations/Organizations';
import './Organizations.css';

function orgComponents(orgIds) {
  return orgIds.map(id => (<Org key={id} orgId={id} />));
}

export class Organizations extends Component {
  componentDidMount() {
<<<<<<< HEAD
    this.props.retrieveOrgs();
=======
    this.props.retrieveOrgs(this.props.userName);
>>>>>>> Adding syced app
  }

  render() {
<<<<<<< HEAD
    if (this.props.currentPage !== 'orgs') {
      return <div />;
    }
    if (this.props.currentPage === 'orgs') {
      return (
        <div>
          <Button icon onClick={() => this.props.renderLogin()}>
            <Icon name="arrow left" />
          </Button>
          <Grid centered columns={3} padded>
            <Header as="h2" icon textAlign="center">
              <Icon name="github" />
              <Header.Content>
=======
    return (
      <div>
        <Button icon onClick={() => this.props.renderLogin()}>
          <Icon name="arrow left" />
        </Button>
        <Grid centered columns={3} padded>
          <Header as="h2" icon textAlign="center">
            <Icon name="github" />
            <Header.Content>
>>>>>>> Frontend/Backend sync
                Which organization are you interested in?
            </Header.Content>
          </Header>
          <Grid.Row>
            {orgComponents(this.props.orgIds)}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

Organizations.propTypes = {
  retrieveOrgs: PropTypes.func.isRequired,
  orgIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  renderLogin: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

export const mapStateToProps = state => ({
  orgIds: state.orgs.ids,
  orgsById: state.orgs.orgsById,
<<<<<<< HEAD
  currentPage: state.currentPage.render,
=======
  userName: state.currentPage.userName,
>>>>>>> Frontend/Backend sync
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    retrieveOrgs, renderLogin,
  }, dispatch);

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Organizations);
