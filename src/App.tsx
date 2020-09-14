import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Section } from './components/Layout';

const First = styled.div`
  display: flex;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Section>
          <First>
            Edit <code>src/App.tsx</code> and save to reload.
          </First>
        </Section>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
