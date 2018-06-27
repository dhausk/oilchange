import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

function Header(params) {
  return (
    < header className="App-header" >
      <div>
        <h1 className="App-title">Oil Change</h1>
        <p>When did I do that again?</p>
      </div>
      <nav>
        <Link to="/About">About</Link>
        <Link to="/Cars">Logs</Link>
        <Link to="/">Home</Link>
      </nav>
    </header >
  )
}

export default Header;