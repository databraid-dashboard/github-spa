import React from 'react';
import logo from './logo.svg';
import './App.css';
import Issues from './components/Issues/Issues.jsx';
import PR_Table from './components/PR_Table/PR_Table.jsx'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Issues/>
    <PR_Table/>
  </div>
);

export default App;
