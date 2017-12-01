import React from 'react';
import Favorite from './favorite';
import {connect} from 'react-redux';
import {deleteFavorite,requestAllFavorites, receiveFavoriteErrors} from '../../actions/favorite_actions';
import {deleteReservation} from '../../actions/reservation_actions';
import {withRouter} from 'react-router'

//profile container needs to know currentUser
const mapStateToProps = (state,ownProps) => {
  if(state.session.currentUser === null){
    return {};
  }


  return{
    currentUser: state.session.currentUser,
    favorites: state.session.currentUser.favorite_restaurants,
    errors: state.errors.favorites
  }

};



const mapDispatchToProps = (dispatch) => ({
  deleteFavorite: (id) => dispatch(deleteFavorite(id)),
  createFavorite: (favorite) => dispatch(createFavorite(favorite)),
  clearErrors: () => dispatch(receiveFavoriteErrors([]))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Favorite));
