import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Search from './search';
import {searchAllRestaurants} from '../../actions/restaurant_actions';



const mapStateToProps = (state, ownProps) => {


    return{


    }
};

const mapDispatchToProps = (dispatch,ownProps) => ({
  //make reservation, //favorite,



});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Search));
