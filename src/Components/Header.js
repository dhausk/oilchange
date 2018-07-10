import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

function Header() {
  return (
    < header className="App-header" >
      <div className="title-div">
        <h1 className="title">Oil Change</h1>
        <p>When did I do that again?</p>
      </div>
      <nav className="header-nav" >
        <Link to="/About">
          <button className="nav-button" >About</button>
        </Link>
        <Link to="/Vehicles">
          <button className="nav-button" >Vehicles</button>
        </Link>
        <Link to="/">
          <button className="nav-button" >Home</button>
        </Link>
      </nav>
    </header >
  )
}

export default Header;