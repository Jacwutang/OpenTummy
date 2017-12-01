import merge from 'lodash/merge';

import {RECEIVE_FAVORITE,REMOVE_FAVORITE} from '../actions/favorite_actions';

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({},state);

  switch(action.type){
    case RECEIVE_FAVORITE:
      const newFavorite = {[action.favorite.id]: action.favorite};

        return merge({}, state , newFavorite);

    


    default:
      return state;
  }
};

export default favoritesReducer;
