import merge from 'lodash/merge';

import {RECEIVE_RESTAURANT, RECEIVE_ALL_RESTAURANTS,REMOVE_RESTAURANT} from '../actions/restaurant_actions';

const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({},state);

  switch(action.type){
    case RECEIVE_RESTAURANT:
      const newRestaurant = {[action.restaurant.id]: action.restaurant};
        return merge({}, state , newRestaurant);
        

    case RECEIVE_ALL_RESTAURANTS:
      return merge({},state,action.restaurants);
      //return(action.restaurants);

     case REMOVE_RESTAURANT:
     delete newState.currentUser.restaurants[action.id];
      return newState;


    default:
      return state;
  }
};

export default restaurantsReducer;
