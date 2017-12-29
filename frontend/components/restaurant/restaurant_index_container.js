import {connect} from 'react-redux';
import RestaurantIndex from './restaurant_index';
// import {withRouter} from 'react-router';
import {requestAllRestaurants} from '../../actions/restaurant_actions';
import {withRouter} from 'react-router';


const mapStateToProps = (state,ownProps) => {

  ;
  return({
     restaurants: Object.keys(state.restaurants).map(id => state.restaurants[id]),

     area: ownProps.location.pathname.slice(1)

  });

};

const mapDispatchToProps = (dispatch) => ({
  requestAllRestaurants: () => dispatch(requestAllRestaurants())


});

export default withRouter( connect(mapStateToProps,mapDispatchToProps)(RestaurantIndex));
