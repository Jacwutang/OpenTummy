import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/Root';
import {signup, login, logout} from './actions/session_actions';
import {createRestaurant} from './actions/restaurant_actions';


document.addEventListener("DOMContentLoaded", () =>{
  const root = document.getElementById('root');

  let store;
  // if there is a window.currentUser, the preloaded state will boostrap in the currentUser
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  }
  else {
    store = configureStore();
  }


  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.store = store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  window.createRestaurant = createRestaurant;



  ReactDOM.render(<Root store={store}/>, root);
});

// res = {restaurant: {  name: "10pin Bowling Lounge",
//             address: "330 N State Street",
//             city: "Chicago",
//             state: "IL",
//             postal_code: "60610",
//             country: "US",
//             price: 3,
//             lat: 41.888634,
//             lng: -87.628091,
//             thumbnail: "https://www.opentable.com/img/restimages/7267.jpg"}
