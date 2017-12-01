import React from 'react';
import Favorite from './favorite';
import {connect} from 'react-redux';
import {deleteFavorite,requestAllFavorites} from '../../actions/favorite_actions';
import {deleteReservation} from '../../actions/reservation_actions';
import {withRouter} from 'react-router'

//profile container needs to know currentUser
const mapStateToProps = (state,ownProps) => ({
  currentUser: state.session.currentUser


});



const mapDispatchToProps = (dispatch) => ({
  deleteFavorite: (id) => dispatch(deleteFavorite(id)),
  createFavorite: (favorite) => dispatch(createFavorite)

});

export default connect(mapStateToProps,mapDispatchToProps)(Favorite);
