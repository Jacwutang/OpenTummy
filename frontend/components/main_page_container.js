import {connect} from 'react-redux';
import MainPage from './main_page';
import {requestAllRestaurants} from '../actions/restaurant_actions';
import {withRouter} from 'react-router';

const mapStateToProps = (state) => ({
  state

});

const mapDispatchToProps = (dispatch, ownProps) => {



  return{
    requestAllRestaurants: () => dispatch(requestAllRestaurants())
  }


};



export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
