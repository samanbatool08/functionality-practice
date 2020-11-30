import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
// import Buttons from './Buttons';
import reportWebVitals from './reportWebVitals';

let initialState = {
  number: 0
}

const reducer = (prevState=initialState, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {...prevState, number: prevState.number + 1}
    case 'DECREMENT':
      return{ ...prevState, number: prevState.number - 1}
    default:
      return prevState
  }
}

let store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
