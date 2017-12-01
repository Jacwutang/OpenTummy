import {RECEIVE_FAVORITE_ERRORS, RECEIVE_FAVORITE} from '../actions/favorite_actions';


const favoriteErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_FAVORITE_ERRORS:
      return action.errors;

    case RECEIVE_FAVORITE:
      return [];

    default:
      return state;
  }


}

export default favoriteErrorsReducer;
