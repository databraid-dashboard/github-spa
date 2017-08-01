import React from 'react';
import logo from './logo.svg';
import './App.css';
import Issues from './components/Issues/Issues.jsx';
import PrTable from './components/PrTable/PrTable.jsx'
import Milestones from './components/Milestones/Milestones.jsx'
import { Container } from 'semantic-ui-react';

const App = () => (
  <Container>
    <Issues/>
    <PrTable/>
    <Milestones/>
  </Container>
);

export default App;
