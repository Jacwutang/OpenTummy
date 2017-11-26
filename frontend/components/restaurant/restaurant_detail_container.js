import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import RestaurantDetail from './restaurant_detail';



const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser


});

const mapDispatchToProps = (dispatch) => ({



});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RestaurantDetail));
