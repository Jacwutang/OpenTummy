import React from 'react';
import ReactStars from 'react-stars'
import Modal from 'react-responsive-modal';

class Review extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open:false
    }
  }

  ratingChanged(newRating){
    console.log(newRating);
  }



  onOpenModal(){
    const {currentUser} = this.props;

    (currentUser === null) ? null

     : this.setState({ open: true })
  }

  onCloseModal(){
    this.setState({ open: false })
  }

  render(){
    const { open } = this.state;

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
                value={0}
                half={false}
                color2={'#ffd700'}/>
                <textarea rows="5" cols="50"/>
                <button
                type="submit"

                >
                Submit

                </button>
          </Modal>
        </h1>

        <hr/>
        <span> Gooooood stuff. I love it </span>
      </div>


    )
  }

}


export default Review;
