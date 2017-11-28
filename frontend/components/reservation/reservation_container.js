import React from 'react';
import {connect} from 'react-redux';
import ReservationForm from './reservation_form';
import {withRouter} from 'react-router';
import {createReservation} from '../../actions/reservation_actions';

const mapStateToProps = (state) => {

  return{
    currentUser: state.session.currentUser
  }


};


const mapDispatchToProps = (dispatch) => {
  return {
    createReservation: (reservation) => dispatch(createReservation(reservation))

  };


};


export default withRouter( connect(mapStateToProps,mapDispatchToProps)(ReservationForm));
