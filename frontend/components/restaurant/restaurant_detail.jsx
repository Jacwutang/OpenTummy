import React from 'react';
import ReservationContainer from '../reservation/reservation_container';

class RestaurantDetail extends React.Component{
  constructor(props){
    super(props);


  }

  componentWillMount(){
    this.props.requestRestaurant(this.props.match.params.restId);
  }




  render(){
    const {restaurant} = this.props;


    if (typeof restaurant === "undefined"){
      return null;
    }
    else{

      return(
        <section className = "restaurant-detail-main">
          <h1> Restaurant Detail </h1>
          <div className = "restaurant-detail-header">

            <img className="thumbnail-restaurant-detail" src={restaurant.thumbnail}/>

            <div className = "restaurant-detail-header-left">
              <h1 className = "h1-restaurant-title">{restaurant.name} </h1>
              <span> <h3> ******* </h3> <h3> 35 Reviews </h3> </span>
              <br/>
            </div>

            <button className = "fav-button-restaurant-item"> <i className="fa fa-star" aria-hidden="true"></i> Fav </button>



          </div>

          <div>
            <ReservationContainer />
          </div>

          <br/>

          <div className = "content-div">
            <h1> About {restaurant.name} </h1>
            <hr/>
            <span> {restaurant.description} Contemporary Food. Styled in Georgian </span>
          </div>

          <br/>

          <div className = "content-div">
            <h1> Ratings and Reviews </h1>
            <hr/>
            <span> Gooooood stuff. I love it </span>
          </div>

        </section>
      );
    }


  }



}

export default RestaurantDetail;
