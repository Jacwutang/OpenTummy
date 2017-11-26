import {connect} from 'react-redux';
import RestaurantForm from './restaurant_form';
// import {withRouter} from 'react-router';
import {createRestaurant} from '../../actions/restaurant_actions';


const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),



});

const mapDispatchToProps = (dispatch) => ({
  createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant))


});

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantForm);
