import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Search from './search';
import {searchAllRestaurants, requestRestaurant} from '../../actions/restaurant_actions';



const mapStateToProps = (state) => {



    return{
      currentUser:  state.session.currentUser,
      results: state.search.restaurants

    }
};

const mapDispatchToProps = (dispatch) => ({
  //make reservation, //favorite,
  searchAllRestaurants: (query) => dispatch(searchAllRestaurants(query)),
  requestRestaurant: (id) => dispatch(requestRestaurant(id))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Search));
