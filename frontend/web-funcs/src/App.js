import './App.css';
import React from 'react';
import Buttons from './Buttons';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="app">
     <h1>Hello</h1>
      <Buttons />
    </div>
  );
}

const mysteryFunc1 = (mysArg1) => {
  return {}
}

const mysteryFunc2 = (mysArg2) => {
  return {}
}

export default connect(mysteryFunc1, mysteryFunc2) (App);
