import React from 'react';
import Profile from './profile';
import {connect} from 'react-redux';
import {deleteRestaurant,requestAllRestaurants} from '../../actions/restaurant_actions';
import {deleteReservation} from '../../actions/reservation_actions';
import {deleteFavorite} from '../../actions/favorite_actions';
//profile container needs to know currentUser
const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  restaurantsIndex: state.restaurants

});



const mapDispatchToProps = (dispatch) => ({
  requestAllRestaurants: () => dispatch(requestAllRestaurants()),
  deleteRestaurant: (id) => dispatch(deleteRestaurant(id)),
  deleteReservation: (id) => dispatch(deleteReservation(id)),
  deleteFavorite: (id) => dispatch(deleteFavorite(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
