import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Review from './review';
// import {} from '../../actions/restaurant_actions';
import {createReview, requestAllReviews} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {

  return({
    restaurant_id: ownProps.match.params.restId
  });
};

const mapDispatchToProps = (dispatch,ownProps) => ({
  requestAllReviews: (rest_id) => dispatch(requestAllReviews(rest_id))


});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Review));
