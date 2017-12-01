import * as RESERVATIONutil from '../utils/reservation_api_util';

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";


export const removeReservation = reservation => ({
  type: REMOVE_RESERVATION,
  reservation
})

export const receiveReservationErrors = errors => ({
  type: RECEIVE_RESERVATION_ERRORS,
  errors
});

export const receiveReservation = (reservation) => ({
  type: RECEIVE_RESERVATION,
  reservation
});


export const createReservation = reservation => dispatch => (
  RESERVATIONutil.createReservation(reservation).then(reservation => (
    dispatch(receiveReservation(reservation))), err => (dispatch(receiveReservationErrors(err.responseJSON)))
));

export const editReservation = reservation => dispatch => (
  RESERVATIONutil.editReservation(reservation).then(reservation => (
    dispatch(receiveReservation(reservation))), err => (dispatch(receiveReservationErrors(err.responseJSON)))
));


export const deleteReservation = (id) => dispatch => (
    RESERVATIONutil.deleteReservation(id).then (resp => (
      dispatch(removeReservation(resp))
    )));






    // export const signup = user => dispatch => (
    //   APIUtil.signup(user).then(user => (
    //     dispatch(receiveCurrentUser(user))),
    //     err => (
    //     dispatch(receiveErrors(err.responseJSON)))
    //   )
    // );
