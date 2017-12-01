import {connect} from 'react-redux';
import RestaurantForm from './restaurant_form';
// import {withRouter} from 'react-router';
import {createRestaurant,editRestaurant,receiveErrors,requestRestaurant} from '../../actions/restaurant_actions';
import {withRouter} from 'react-router';




const mapStateToProps = (state,ownProps) => {

  return{
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.restaurant,
    currentUser: state.session.currentUser,
    editRestaurantState: state.session.currentUser.restaurants[ownProps.match.params.restaurantId]
  }

};

const mapDispatchToProps = (dispatch,ownProps) => {
  // createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant)),
  // editRestaurant: (restaurant) => dispatch(editRestaurant(restaurant)),

  const processRestaurant = (ownProps.match.params.restaurantId !== undefined) ? editRestaurant: createRestaurant;
  

  const formType = (ownProps.match.params.restaurantId !== undefined) ? 'Edit this Restaurant': 'Create new Restaurant';

  return{
    clearErrors: () => dispatch(receiveErrors([])),
    processRestaurant: (restaurant) => dispatch(processRestaurant(restaurant)),
    requestRestaurant: (id) => dispatch(requestRestaurant(id)),
    formType: formType

  }


}

export default withRouter( connect(mapStateToProps,mapDispatchToProps)(RestaurantForm));
