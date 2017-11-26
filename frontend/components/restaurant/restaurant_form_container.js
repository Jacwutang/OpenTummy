import {connect} from 'react-redux';
import RestaurantForm from './restaurant_form';
// import {withRouter} from 'react-router';
import {createRestaurant,receiveErrors} from '../../actions/restaurant_actions';
import {withRouter} from 'react-router';


const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.restaurant



});

const mapDispatchToProps = (dispatch) => ({
  createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant)),
  clearErrors: () => dispatch(receiveErrors([]))


});

export default withRouter( connect(mapStateToProps,mapDispatchToProps)(RestaurantForm));
