import {connect} from 'react-redux';
import RestaurantIndex from './restaurant_index';
// import {withRouter} from 'react-router';
import {requestAllRestaurants} from '../../actions/restaurant_actions';
import {withRouter} from 'react-router';


const mapStateToProps = (state) => ({
  restaurants: state.restaurants
  //loading spinner?


});

const mapDispatchToProps = (dispatch) => ({
  requestAllRestaurants: () => dispatch(requestAllRestaurants())


});

export default withRouter( connect(mapStateToProps,mapDispatchToProps)(RestaurantIndex));
