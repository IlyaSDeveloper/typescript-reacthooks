import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import CounterReducer from './CounterReducer';

const App = () => {
  return (
    <div className="container">
      <Counter />
      <CounterReducer />
    </div>
  )
}

export default App