import React from 'react';
import {connect} from 'react-redux';
import ReservationForm from './reservation_form';
import {withRouter} from 'react-router';
import {createReservation, receiveReservationErrors} from '../../actions/reservation_actions';

const mapStateToProps = (state,ownProps) => {
  const formType = Object.keys(state.session.currentUser.reservations).includes(ownProps.match.params.restId)? 'edit': 'new'

  debugger;
  return{
    currentUser: state.session.currentUser,
    errors: state.errors.reservation,
    formType
  }


};


const mapDispatchToProps = (dispatch,ownProps) => {


  return {
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    clearErrors: () => dispatch(receiveReservationErrors([])),

  };


};


export default withRouter( connect(mapStateToProps,mapDispatchToProps)(ReservationForm));
