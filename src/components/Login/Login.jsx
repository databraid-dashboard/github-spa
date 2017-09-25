/* eslint-disable import/no-named-as-default, no-shadow, consistent-return */
import React, { Component } from 'react';
import cookie from 'react-cookies';
import { Grid, Card, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { displayOrgs } from '../../actions/renderActions';
import injectWidgetId from '../../utils/utils';
import './Login.css';

export class Login extends Component {
  componentDidMount() {
    if (cookie.load('userName') !== undefined) {
      const name = cookie.load('userName');
      this.props.displayOrgs(name);
    }
  }
  render() {
    const island = {
      marginTop: '20%',
      height: '105px',
      width: '330px',
    };

    const butterButton = {
      height: '75px',
      width: '300px',
    };

    const GITHUB_OAUTH_URL = `${process.env.REACT_APP_GITHUB_API_URL}/auth/github`;

    return (
      <Grid verticalAlign={'middle'}>
        <Grid.Row centered verticalAlign={'middle'}>
          <Grid.Column verticalAlign={'middle'}>
            <Card raised centered style={island}>
              <Card.Content>
                <Button
                  as="a"
                  href={`${GITHUB_OAUTH_URL}`}
                  style={butterButton}
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
  displayOrgs: PropTypes.func.isRequired,
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
  displayOrgs,
}, dispatch);

export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(Login));
