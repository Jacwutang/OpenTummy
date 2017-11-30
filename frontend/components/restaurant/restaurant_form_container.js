import {connect} from 'react-redux';
import RestaurantForm from './restaurant_form';
// import {withRouter} from 'react-router';
import {createRestaurant,editRestaurant,receiveErrors} from '../../actions/restaurant_actions';
import {withRouter} from 'react-router';


const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.restaurant,
  currentUser: state.session.currentUser


});

const mapDispatchToProps = (dispatch,ownProps) => {
  // createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant)),
  // editRestaurant: (restaurant) => dispatch(editRestaurant(restaurant)),

  const processRestaurant = (ownProps.match.params.restaurantId !== null) ? editRestaurant: createRestaurant

  // const processRestaurant = (formTypeCheck  === '')? editrestaurant : createrestaurant;
  return{
    clearErrors: () => dispatch(receiveErrors([])),
    processRestaurant: (restaurant) => dispatch(processRestaurant(restaurant))
  }


}

export default withRouter( connect(mapStateToProps,mapDispatchToProps)(RestaurantForm));
