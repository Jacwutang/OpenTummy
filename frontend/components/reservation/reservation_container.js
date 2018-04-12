import React from 'react';
import {connect} from 'react-redux';
import ReservationForm from './reservation_form';
import {withRouter} from 'react-router';
import {createReservation, receiveReservationErrors, editReservation} from '../../actions/reservation_actions';
var _ = require('lodash')


const mapStateToProps = (state,ownProps) => {

  if(state.session.currentUser === null){
    return {
      formType: 'Book this Restaurant',
      errors: state.errors.reservation,
      currentUser: {id: null}
    };
  }

   let {reservations} = state.session.currentUser;

   let resValues = Object.values(reservations);


   // Find the reservation id that corresponds to the restaurant_id
    let reservationId = null;
    let route_params_rest_id = ownProps.match.params.restId;
    resValues.forEach( (el) => {
     if (el.restaurant_id === parseInt(route_params_rest_id)){
         reservationId = el.id;

     }
    });

    

   const formType = reservationId === null? 'Book this Restaurant': 'Edit this Reservation'



  return{
    currentUser: state.session.currentUser,
    errors: state.errors.reservation,
    formType,
    reservationId,
    reservations: state.session.currentUser.reservations,

  }


};


const mapDispatchToProps = (dispatch,ownProps) => {


  return {
    clearErrors: () => dispatch(receiveReservationErrors([])),
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    editReservation: (reservation) => dispatch(editReservation(reservation))

  };


};


export default withRouter( connect(mapStateToProps,mapDispatchToProps)(ReservationForm));
