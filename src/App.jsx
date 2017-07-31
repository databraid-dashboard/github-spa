import React from 'react';
import logo from './logo.svg';
import './App.css';
import Issues from './components/Issues/Issues.jsx';

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
  </div>
);

export default App;
