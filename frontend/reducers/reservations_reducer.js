// import merge from 'lodash/merge';
//
// import {RECEIVE_RESERVATION, RECEIVE_ALL_RESERVATIONS,REMOVE_RESERVATION} from '../actions/reservationactions';
//
// const reservationReducer = (state = {}, action) => {
//   Object.freeze(state);
//
//   let newState = merge({},state);
//
//   switch(action.type){
//     case RECEIVE_RESERVATION:
//       const newRestaurant = {[action.reservationid]: action.reservation;
//         return merge({}, state , newRestaurant);
//
//     case REMOVE_RESERVATION:
//      delete newState.currentUser.reservation[action.id];
//       return newState;
//
//
//     default:
//       return state;
//   }
// };
//
// export default reservationsReducer;
