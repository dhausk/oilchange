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
        <Link to="/About">Begin your adventure!</Link>
      </nav>
    </header >
  )
}

export default Header;