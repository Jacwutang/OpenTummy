import React from 'react';
import {connect} from 'react-redux';
import ReservationForm from './reservation_form';
import {withRouter} from 'react-router';
import {createReservation, receiveReservationErrors, editReservation} from '../../actions/reservation_actions';
var _ = require('lodash')


const mapStateToProps = (state,ownProps) => {

  if(state.session.currentUser === null){
    return {
      formType: 'Book this Reservation',
      errors: state.errors.reservation

    };
  }

   let resValues = Object.values(state.session.currentUser.reservations);


    let reservationId = null;
    resValues.forEach( (el) => {
     if (el.restaurant_id === parseInt(ownProps.match.params.restId)){
         reservationId = el.id;
     }
    });



   var permittedValues = _.map(resValues, 'restaurant_id');

   var permittedValuesToString = permittedValues.map(value => value.toString());

   const formType = permittedValuesToString.includes(ownProps.match.params.restId)? 'Edit this Reservation': 'Book this Restaurant'




  return{
    currentUser: state.session.currentUser,
    errors: state.errors.reservation,
    formType,
    reservationId,
    reservation: state.session.currentUser.reservations,

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
