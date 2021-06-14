import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore()
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
