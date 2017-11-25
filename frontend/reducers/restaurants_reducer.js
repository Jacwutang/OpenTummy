import merge from 'lodash/merge';
import {RECEIVE_RESTAURANT, receiveRestaurant} from '../actions/restaurant_actions';

const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({},state);

  switch(action.type){
    case RECEIVE_RESTAURANT:
      const newRestaurant = {[action.restaurant.id]: action.restaurant};
      return merge({},state,newRestaurant);

    default:
      return state;
  }



};

export default restaurantsReducer;
