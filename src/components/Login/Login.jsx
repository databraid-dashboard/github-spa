/* eslint-disable import/no-named-as-default, no-shadow, consistent-return */
import React, { Component } from 'react';
import cookie from 'react-cookies';
import { Grid, Card, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchOrgs } from '../../actions/renderActions';
import injectWidgetId from '../../utils/utils';
import './Login.css';

export class Login extends Component {
  componentDidMount() {
    if (cookie.load('userName') !== undefined) {
      const name = cookie.load('userName');
      this.props.fetchOrgs(name);
    }
  }
  render() {
    const GITHUB_OAUTH_URL = process.env.REACT_APP_GITHUB_OAUTH_URL;
    return (
      <Grid verticalAlign={'middle'}>
        <Grid.Row centered verticalAlign={'middle'}>
          <Grid.Column centered verticalAlign={'middle'}>
            <Card raised centered className="island">
              <Card.Content>
                <Button
                  as="a"
                  href={`${GITHUB_OAUTH_URL}`}
                  className="butterButton"
                  size="massive"
                  content="Login with Github"
                  icon="github"
                />
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

Login.propTypes = {
  /* eslint-disable react/no-unused-prop-types, react/require-default-props */
  fetchOrgs: PropTypes.func.isRequired,
  userName: PropTypes.string,
};

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const currentPage = state.widgets.byId[id].currentPage.render;
  const userName = state.widgets.byId[id].currentPage.userName;

  return {
    currentPage,
    userName,
  };
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  fetchOrgs,
}, dispatch);

export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(Login));
