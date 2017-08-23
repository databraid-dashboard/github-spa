/* eslint-disable import/no-named-as-default, no-shadow, consistent-return */
import cookie from 'react-cookies'
import React, { Component }from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { renderOrgs } from '../../actions/renderActions';
import './Login.css';

export class Login extends Component {
  componentDidMount() {
    if (cookie.load('userName') !== undefined) {
    let name = cookie.load('userName')
    this.props.renderOrgs(name);
    }
  }

  render() {
    return (
      <Grid verticalAlign={'middle'}>
        <Grid.Row centered verticalAlign={'middle'}>
          <Grid.Column centered verticalAlign={'middle'}>
            <Card raised centered className="island">
              <Card.Content>
                <Button
                  as='a'
                  href='http://localhost:8000/auth/github/'
                  className="butterButton"
                  size="massive"
                  content="Login with Github"
                  icon="github"
                  // onClick={() => renderOrgs(cookie.load('userName'))}
                />
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

};

Login.propTypes = {
  renderOrgs: PropTypes.func.isRequired,
  userName: PropTypes.string,
};

const mapStateToProps = state => ({
  userName: state.currentPage.userName,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  renderOrgs,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
