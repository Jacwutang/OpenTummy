import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';


document.addEventListener("DOMContentLoaded", () =>{
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Hello World</h1>, root);
});
