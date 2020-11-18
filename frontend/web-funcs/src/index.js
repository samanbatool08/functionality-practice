import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let initialState = {
  number: 0
}

let reducer = (prevState = initialState, action) => {
  console.log('in reducer', action.type)
  switch (action.type) {
    case 'DECREMENT':
      return { ...prevState, number: prevState.number - 1 }
    case 'INCREMENT':
      return { ...prevState, number: prevState.number + 1 }
    default:
      return prevState
  }

}
let store = createStore(reducer);

console.log(store.getState())

console.log(store.dispatch({ type: 'INCREMENT' }))
console.log(store.dispatch({ type: 'INCREMENT' }))
console.log(store.dispatch({ type: 'INCREMENT' }))
console.log(store.dispatch({ type: 'DECREMENT' }))

console.log(store.getState())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
