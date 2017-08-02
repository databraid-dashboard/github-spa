import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Issues from './components/Issues/Issues.jsx';
import PrTable from './components/PrTable/PrTable.jsx'
import Milestones from './components/Milestones/Milestones.jsx'
import { Container } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import {retrieveOrgs} from './actions/orgActions';
import {connect} from 'react-redux';

class App extends Component{

  componentDidMount(){
    this.props.retrieveOrgs();
  }
  render() {
    return (
    <Container>
      <Issues {...this.props.issues}/>
      <PrTable/>
      <Milestones/>
    </Container>
  );
  }
}


const mapStateToProps = state => {
  return {
    orgs: state.orgs,
    issues: state.repos
  }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  retrieveOrgs,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
