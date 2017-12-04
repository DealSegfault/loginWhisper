import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

const App = ({dispatch, handleClick}) => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the PoC</h1>
        </header>
        <p className="App-intro">
          {/* To get started, click <a href="/admin" target="">
            <button>here</button>
          </a>. */}
          <Link to="/admin"><button>Admin</button></Link>
          <button onClick={() => handleClick(dispatch, "me")}>Login</button>
        </p>
      </div>
    );
}

export default App;
