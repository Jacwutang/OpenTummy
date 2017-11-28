import * as RESERVATIONutil from '../utils/reservation_api_util';

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";


export const removeReservation = id => ({
  type: REMOVE_RESERVATION,
  id
})


export const receiveReservation = (reservation) => ({
  type: RECEIVE_RESERVATION,
  reservation
});


export const createReservation = reservation => dispatch => (
  RESERVATIONutil.createReservation(reservation).then(reservation => (
    dispatch(receiveReservation(reservation))
  )));

export const deleteReservation = (id) => dispatch => (
    RESERVATIONutil.deleteReservation(id).then (resp => (
      dispatch(removeReservation(id))
    )));
