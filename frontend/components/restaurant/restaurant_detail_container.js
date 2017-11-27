import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import RestaurantDetail from './restaurant_detail';
import {requestRestaurant} from '../../actions/restaurant_actions';



const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser


});

const mapDispatchToProps = (dispatch,ownProps) => ({
  //make reservation, //favorite,
  requestRestaurant: (id) => dispatch(requestRestaurant(id))


});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RestaurantDetail));
