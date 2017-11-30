import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Search from './search';
import {searchAllRestaurants} from '../../actions/restaurant_actions';



const mapStateToProps = (state) => {


    return{
      currentUser:  state.session.currentUser,
      searchResults: state.search.searchRestaurants

    }
};

const mapDispatchToProps = (dispatch) => ({
  //make reservation, //favorite,
  searchAllRestaurants: (query) => dispatch(searchAllRestaurants(query))

});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Search));
