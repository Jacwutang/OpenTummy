import React from 'react';
import {connect} from 'react-redux';
import ReservationForm from './reservation_form';
import {withRouter} from 'react-router';
const mapStateToProps = (state) => {
  return{
    currentUser: state.session.currentUser
  }


};


const mapDispatchToProps = (dispatch) => {
  return {
    //createReservation
    
  };


};


export default withRouter( connect(mapStateToProps,mapDispatchToProps)(ReservationForm));
