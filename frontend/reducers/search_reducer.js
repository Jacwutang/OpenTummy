import merge from 'lodash/merge';

import { RECEIVE_ALL_SEARCH_RESTAURANTS,} from '../actions/restaurant_actions';


const searchReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({},state);

  switch(action.type){
      case RECEIVE_ALL_SEARCH_RESTAURANTS:
      return merge({},{restaurants: action.restaurants});
      // could be buggy here

    default:
      return state;
  }




}

export default searchReducer;
