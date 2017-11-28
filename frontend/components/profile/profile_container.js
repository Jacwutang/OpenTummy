import React from 'react';
import Profile from './profile';
import {connect} from 'react-redux';
import {deleteRestaurant} from '../../actions/restaurant_actions';
import {deleteReservation} from '../../actions/reservation_actions';

//profile container needs to know currentUser
const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser


});



const mapDispatchToProps = (dispatch) => ({
  deleteRestaurant: (id) => dispatch(deleteRestaurant(id)),
  deleteReservation: (id) => dispatch(deleteReservation(id))

});

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
