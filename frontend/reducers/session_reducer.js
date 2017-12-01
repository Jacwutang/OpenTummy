
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

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, {currentUser}) ;
      //merge merges empty {} with {currentUser: id:2, username: jack2}
    default:
      return state;
  }
};


export default sessionReducer;
