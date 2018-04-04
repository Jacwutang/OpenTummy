import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/Root';
import {signup, login, logout} from './actions/session_actions';
import {createRestaurant, requestAllRestaurants,searchAllRestaurants} from './actions/restaurant_actions';
import {createReservation, deleteReservation, editReservation} from './actions/reservation_actions';
import {createFavorite, deleteFavorite} from './actions/favorite_actions';

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




  ReactDOM.render(<Root store={store}/>, root);
});
