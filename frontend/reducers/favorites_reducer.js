import merge from 'lodash/merge';

import {RECEIVE_FAVORITE,REMOVE_FAVORITE} from '../actions/favorite_actions';

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({},state);

  switch(action.type){


    default:
      return state;
  }
};

export default favoritesReducer;
