import {connect} from 'react-redux';
import MainPage from './main_page';
import {requestAllRestaurants} from '../actions/restaurant_actions';


const mapStateToProps = (state) => ({
  state

});

const mapDispatchToProps = (dispatch, ownProps) => {



  return{
    requestAllRestaurants: () => dispatch(requestAllRestaurants())
  }


};



export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
