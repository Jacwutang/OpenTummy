import React from 'react';
import ReservationContainer from '../reservation/reservation_container';
import FavoriteContainer from '../favorite/favorite_container';
import ReviewsContainer from '../review/review_container';
import PhotoSlider from '../misc/photo_slider';

class RestaurantDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loaded:false,
      open: false

    };
  }


  componentDidMount(){
    // this.props.requestRestaurant(this.props.match.params.restId).then(() => this.setState({loaded:true}));
    this.props.requestAllRestaurants().then(() => this.setState({loaded:true}));
    window.scrollTo(0,0);

  }





  render(){

    if (this.state.loaded !== true){

      return null;
    }

    else{
      const {restaurant} =  this.props;


      $('ul').css('display', 'none');


      return(
        <section className = "restaurant-detail-main">

          <div className = "restaurant-detail-header">

            <img className="thumbnail-restaurant-detail" src={restaurant.thumbnail}/>

            <div className = "restaurant-detail-header-left">
              <h1 className = "h1-restaurant-title">{restaurant.name} </h1>
            </div>

            <FavoriteContainer
            restaurant={restaurant} />
          </div>



          <div>
            <ReservationContainer
            restaurant={restaurant}/>
          </div>


          <br/>

          <div className = "content-div-first">
            <h1 className="h1-content-div"> About {restaurant.name} </h1>
            <hr/>
            <blockquote className = "restaurant-detail-about">  {restaurant.description}
            </blockquote>

          </div>

          <br/>

          <div className = "content-div content-photos">
            <h1 className="h1-content-div"> Restaurant Photos </h1>
            <hr style={{marginBottom: '0'}}/>

            <PhotoSlider
              images={restaurant.image_urls}
            />

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
