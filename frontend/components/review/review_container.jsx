import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Review from './review';
// import {} from '../../actions/restaurant_actions';
import {createReview} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return({

  });
};

const mapDispatchToProps = (dispatch,ownProps) => ({



});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Review));
