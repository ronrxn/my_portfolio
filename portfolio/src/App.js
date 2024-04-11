import React, { Component } from 'react';
import Navbar_ from './pages/accueil';
import Body from './pages/body'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar_ />
        <Body />
      </div>
    );
  }
}

export default App;
