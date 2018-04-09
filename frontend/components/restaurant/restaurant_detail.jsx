import React from 'react';
import ReservationContainer from '../reservation/reservation_container';
import FavoriteContainer from '../favorite/favorite_container';
import ReviewsContainer from '../review/review_container'

class RestaurantDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loaded:false,
      open: false

    };
  }

  
  componentDidMount(){
    this.props.requestRestaurant(this.props.match.params.restId).then(() => this.setState({loaded:true}));
    window.scrollTo(0,0);
  }



  render(){


    const {restaurant} = this.props;


    if (this.state.loaded !== true || typeof restaurant === undefined){

      return null;
    }

    else{

      $('ul').css('display', 'none');

      let reservationId = parseInt(this.props.match.params.reservationId);

      return(
        <section className = "restaurant-detail-main">

          <div className = "restaurant-detail-header">

            <img className="thumbnail-restaurant-detail" src={restaurant.thumbnail}/>

            <div className = "restaurant-detail-header-left">
              <h1 className = "h1-restaurant-title">{restaurant.name} </h1>
              <span> <h4> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i> <i className="fa fa-star" aria-hidden="true"></i></h4> <h4> 40 Reviews </h4> </span>
              <br/>
            </div>

            <FavoriteContainer
            restaurant={restaurant} />
          </div>



          <div>
            <ReservationContainer
            restaurant={restaurant}/>
          </div>


          <br/>

          <div className = "content-div">
            <h1 className="h1-content-div"> About {restaurant.name} </h1>
            <hr/>
            <p className = "restaurant-detail-about"> {restaurant.description} Contemporary Food. Hippest place on earth.
            </p>

          </div>

          <br/>

          <div className = "content-div">
          <h1 className="h1-content-div"> Restaurant Photos </h1>
          <hr/>
          </div>

          <br/>

            <ReviewsContainer
            restaurant={restaurant}/>

          </section>
      );
    }


  }



}

export default RestaurantDetail;
