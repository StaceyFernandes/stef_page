import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './components/Introduction'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stephanie Fernandes</h1>
        </header>


        <Introduction/>
      </div>
    );
  }
}

export default App;
