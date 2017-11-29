import {RECEIVE_RESERVATION_ERRORS, RECEIVE_RESERVATION} from '../actions/reservation_actions';


const reservationErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_RESERVATION_ERRORS:
      return action.errors;

    case RECEIVE_RESERVATION:
      return [];

    default:
      return state;
  }


}

export default reservationErrorsReducer;
