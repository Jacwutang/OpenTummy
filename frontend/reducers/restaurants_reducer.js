import merge from 'lodash/merge';

import {RECEIVE_RESTAURANT, RECEIVE_ALL_RESTAURANTS,RECEIVE_ALL_SEARCH_RESTAURANTS,REMOVE_RESTAURANT} from '../actions/restaurant_actions';

import {RECEIVE_REVIEW} from '../actions/review_actions';

const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({},state);

  switch(action.type){
    case RECEIVE_RESTAURANT:
      const newRestaurant = {[action.restaurant.id]: action.restaurant};
        return merge({}, state , newRestaurant);

    // case RECEIVE_REVIEW:
    //   const newReview = {[action.review.id]: action.review};
    //     return merge({}, state , newReview);

    case RECEIVE_REVIEW:
      const newReview = {[action.review.restaurant_id]: action.review };
        return merge({}, state , newReview);


    case RECEIVE_ALL_RESTAURANTS:



     return merge({},action.restaurants);










    default:
      return state;
  }
};

export default restaurantsReducer;
