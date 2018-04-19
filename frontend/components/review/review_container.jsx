import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Review from './review';
// import {} from '../../actions/restaurant_actions';
import {createReview, requestAllReviews} from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let user = (state.session.currentUser) === null? null: state.session.currentUser;

  return({
    restaurant_id: ownProps.match.params.restId,
    currentUser: user,
    reviews: Object.values(state.restaurants[ownProps.match.params.restId].reviews)
  });
};

const mapDispatchToProps = (dispatch,ownProps) => ({
  createReview: (review) => dispatch(createReview(review))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Review));
