
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_RESTAURANT, REMOVE_RESTAURANT} from '../actions/restaurant_actions';
import {RECEIVE_FAVORITE, REMOVE_FAVORITE} from '../actions/favorite_actions';
import {RECEIVE_RESERVATION, REMOVE_RESERVATION} from '../actions/reservation_actions';

import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null
}


//returns POJO
const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({},state)
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, {currentUser}) ;
      //merge merges empty {} with {currentUser: id:2, username: jack2}

    case RECEIVE_RESTAURANT:
    const newRest = {[action.restaurant.id]: action.restaurant};

    case REMOVE_RESTAURANT:
    delete newState.currentUser.restaurants[action.restaurant.id];
    return newState;



    case RECEIVE_FAVORITE:
    const newFav = {[action.favorite.id]: action.favorite};

    case REMOVE_FAVORITE:
      delete newState.currentUser.favorite_restaurants[action.favorite.id];
      return newState;
    //delete newState.restaurants[action.id];


    case RECEIVE_RESERVATION:
    const newReservation = {[action.reservation.id]: action.reservation};
    return newState;


    case REMOVE_FAVORITE:
    delete newState.currentUser.reservations[action.reservation.id];
    return newState;





    default:
      return state;
  }
};


export default sessionReducer;
