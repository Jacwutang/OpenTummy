import React from 'react';
import Profile from './profile';
import {connect} from 'react-redux';
import {deleteRestaurant} from '../../actions/restaurant_actions';

//profile container needs to know currentUser
const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser


});



const mapDispatchToProps = (dispatch) => ({
  deleteRestaurant: (id) => dispatch(deleteRestaurant(id))


});

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
