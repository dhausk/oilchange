import React, { Component } from 'react';
import logo from '../logo.svg';

function Header(params) {
  return (
    < header className="App-header" >
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header >
  )
}
export default Header;