import merge from 'lodash/merge';

import {RECEIVE_REVIEW, RECEIVE_ALL_REVIEWS} from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  // let newState = merge({},state);

  switch(action.type){
    case RECEIVE_REVIEW:
      const newReview = {[action.review.id]: action.review};
        return merge({}, state , newReview);


    case RECEIVE_ALL_REVIEWS:
        return action.reviews;

     default:
      return state;
  }
};

export default reviewsReducer;
