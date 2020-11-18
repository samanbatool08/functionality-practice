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

const mapStateToProps = (state) => {
  console.log('inside mysteryfunc1', state)
  return {
    // props based on state that app will receive
  } 
}

const mapDispatchToProps = (dispatch) => {
  console.log('inside mysteryfunc2', dispatch)
  return {
    // series of functions that app will be able to call that affect our store
  }
}

export default connect(mapStateToProps, mapDispatchToProps ) (App);
  