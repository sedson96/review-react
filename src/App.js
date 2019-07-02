import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello"
import People from './components/People';

function App() {
  return (
    <div className="App">
      <Hello />
      <People/>
    </div>
  );
}

export default App;
