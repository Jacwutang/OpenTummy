import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import RestaurantDetail from './restaurant_detail';
import {requestRestaurant, requestAllRestaurants} from '../../actions/restaurant_actions';



const mapStateToProps = (state, ownProps) => {
      // state.session.currentUser.restaurants[ownProps.match.params.restId]
    const restId = ownProps.match.params.restId;
    // const restaurantFromMasterList = state.restaurants[restId];

    // const restaurant = (restaurantFromMasterList === undefined)? state.search.restaurants[restId]: restaurantFromMasterList;



    return{
    currentUser: state.session.currentUser,
    restaurant: state.restaurants[restId]

    }
};

const mapDispatchToProps = (dispatch,ownProps) => ({

  requestRestaurant: (id) => dispatch(requestRestaurant(id)),
  requestAllRestaurants: () => dispatch(requestAllRestaurants())



});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RestaurantDetail));
