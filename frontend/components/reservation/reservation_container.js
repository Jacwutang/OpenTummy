import React from 'react';
import {connect} from 'react-redux';
import ReservationForm from './reservation_form';
import {withRouter} from 'react-router';
const mapStateToProps = (state) => {
  return {};


};


const mapDispatchToProps = (dispatch) => {
  return {};


};


export default withRouter( connect(mapStateToProps,mapDispatchToProps)(ReservationForm));
