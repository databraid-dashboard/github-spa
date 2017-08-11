/* eslint-disable import/no-named-as-default, no-shadow, consistent-return */
import React from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { renderOrgs } from '../../actions/renderActions';
import './Login.css';
import injectWidgetId from '../../utils/utils';

export const Login = ({ renderOrgs, userName }) =>
  (<Grid verticalAlign={'middle'}>
    <Grid.Row centered verticalAlign={'middle'}>
      <Grid.Column centered verticalAlign={'middle'}>
        <Card raised centered className="island">
          <Card.Content>
            <Button
              className="butterButton"
              size="massive"
              content="Login with Github"
              icon="github"
              onClick={() => renderOrgs(userName)}
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>);

Login.propTypes = {
  renderOrgs: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  userName: state.currentPage.userName,
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      renderOrgs,
    },
    dispatch,
  );

export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(Login));
