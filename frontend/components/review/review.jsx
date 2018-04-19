import React from 'react';
import ReactStars from 'react-stars'
import Modal from 'react-responsive-modal';


class Review extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      open: false,
      loaded: false,
      rating: 0,
      body: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    // this.props.requestAllReviews(this.props.restaurant_id).then(() => this.setState({loaded: true}));
    // console.log(this.props.reviews)


    this.setState({loaded:true})
  }

  ratingChanged(newRating){
    this.setState({rating: newRating})
  }

  handleSubmit(){


    let review = {};
    review.body = this.state.body;
    review.rating = this.state.rating;
    review.user_id = this.props.currentUser.id;
    review.restaurant_id = this.props.restaurant_id;

    this.props.createReview(review);
  }



  onOpenModal(){
    const {currentUser} = this.props;

    (currentUser === null) ? null : this.setState({ open: true })
  }

  onCloseModal(){
    this.setState({ open: false,rating: 0});

  }

  renderReviews(){
    // <ReactStars
    //   count={5}
    //   size={24}
    //   color2={'#ffd700'}
    //   value={Math.floor(Math.random() * Math.floor(4)) + 1}
    //   edit={false}/>
    const {reviews} = this.props;

    return(
      <ul className="reviews-ul">
        {reviews.map( (review) => (

            <div className="reviews-wrapper">
              <div className="review-content">
              {review.body}
              </div>

              <div className="review-content">
                <ReactStars
                  count={5}
                  size={18}
                  color2={'#ffd700'}
                  value={review.rating}
                  edit={false}/>
              </div>
            </div>




        ))
        }

      </ul>
    );
  }

  render(){
    const { open, loaded } = this.state;

    if (loaded){
      return(
        <div className = "content-div-last">
          <h1 className="h1-content-div"> Ratings and Reviews
          <button onClick={() => this.onOpenModal() }>Leave a Review</button>


            <Modal open={open} onClose={() => {this.onCloseModal()} } little>
              <h2>Leave a Review</h2>
              <ReactStars
                  className = "rating-div"
                  count={5}
                  onChange={(rating) => {this.ratingChanged(rating)} }
                  size={24}
                  value={this.state.rating}
                  half={false}
                  color2={'#ffd700'}/>
                  <textarea rows="5" cols="50"
                  onChange={(e) => this.setState({body: e.target.value})}
                  placeholder="This feature is not available yet"
                  />

            </Modal>
          </h1>
          <div>
            {this.renderReviews()}
          </div>


        </div>
      )

    } else{
      return null;
    }

  }

}




export default Review;
