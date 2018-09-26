import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Rec from './recommand/index'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header> </Header>
        <Rec></Rec>
      </div>
    );
  }
}

export default App;
