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
    this.props.requestAllReviews(this.props.restaurant_id).then(() => this.setState({loaded: true}));
  }

  ratingChanged(newRating){
    this.setState({rating: newRating})
  }

  handleSubmit(){
    // console.log(this.state.rating);
    // console.log(this.state.content);

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
    this.setState({ open: false })
  }

  render(){
    const { open, loaded } = this.state;

    if (loaded){
      return(
        <div className = "content-div">
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
                  />
                  <button
                  type="submit"
                  onClick={this.handleSubmit}>
                  Submit</button>
            </Modal>
          </h1>

          <hr/>
          <span> Gooooood stuff. </span>
        </div>
      )

    } else{
      return null;
    }

  }

}


export default Review;
