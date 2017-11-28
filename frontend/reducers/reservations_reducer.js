import merge from 'lodash/merge';

import {RECEIVE_RESERVATION,REMOVE_RESERVATION} from '../actions/reservation_actions';

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({},state);

  switch(action.type){
    case RECEIVE_RESERVATION:
      const newReservation = {[action.reservation.id]: action.reservation};

        return merge({}, state , newReservation);

    case REMOVE_RESERVATION:
    return newState;


    default:
      return state;
  }
};

export default reservationsReducer;
