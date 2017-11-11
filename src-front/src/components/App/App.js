import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({dispatch, handleClick}) => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the PoC</h1>
        </header>
        <p className="App-intro">
          To get started, click <a href="http://localhost:3000/admin" target="">
            <button>here</button>
          </a>.
          <button onClick={() => handleClick(dispatch, "me")}>Login</button>
        </p>
      </div>
    );
}

export default App;
