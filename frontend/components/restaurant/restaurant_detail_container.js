import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import RestaurantDetail from './restaurant_detail';
import {requestSingleRestaurant} from '../../actions/restaurant_actions';


const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser


});

const mapDispatchToProps = (dispatch,ownProps) => ({
  //make reservation, //favorite,
  requestSingleRestaurant: (id) => dispatch(requestSingleRestaurant(id))


});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RestaurantDetail));
