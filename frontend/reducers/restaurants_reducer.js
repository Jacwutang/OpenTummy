import merge from 'lodash/merge';

import {RECEIVE_RESTAURANT, RECEIVE_ALL_RESTAURANTS,RECEIVE_ALL_SEARCH_RESTAURANTS,REMOVE_RESTAURANT} from '../actions/restaurant_actions';

const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);

   let newState = merge({},state);

  switch(action.type){
    // case RECEIVE_RESTAURANT:
    //   const newRestaurant = {[action.restaurant.id]: action.restaurant};
    //     return merge({}, state , newRestaurant);


    case RECEIVE_ALL_RESTAURANTS:
    // newState = merge({},state);
    // newState.currentUser.reservations[action.reservation.id] = action.reservation;
    // return newState;


    return merge({},state,action.restaurants);



    // case RECEIVE_ALL_SEARCH_RESTAURANTS:
    //   return merge({},state,{restaurants: action.restaurants});




    default:
      return state;
  }
};

export default restaurantsReducer;
