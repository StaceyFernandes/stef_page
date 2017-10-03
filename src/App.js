import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './components/Introduction';
import Abc from './components/Abc';
import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Museo-Sans-300';
  color: #697684;

  & h4 {
  font-family: 'Museo-Sans-300';
  font-size: 1em;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Stephanie Fernandes</h1>
          </header>
          <Introduction/>
          <Abc/>
        </div>
      </Container>
    );
  }
}

export default App;
