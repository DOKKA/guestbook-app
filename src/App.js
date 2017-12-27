import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import GBForm from './GBForm/GBForm';

class App extends Component {
  render() {
    return (
      <div className="App container">
      <Header/>
      <GBForm/>
      </div>
    );
  }
}

export default App;
