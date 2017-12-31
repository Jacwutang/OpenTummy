import React from 'react';
import ReservationContainer from '../reservation/reservation_container';
import FavoriteContainer from '../favorite/favorite_container';


class RestaurantDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {loaded:false};


  }

  // componentWillReceiveProps(nextProps){
  //   if(this.props.location.pathname !== nextProps.location.pathname){
  //     this.props.requestRestaurant(this.props.match.params.restId);
  //   }
  // }

  componentDidMount(){
    this.props.requestRestaurant(this.props.match.params.restId).then(() => this.setState({loaded:true}));
    window.scrollTo(0,0);
  }

  componentWillMount(){

  }




  render(){


    const {restaurant} = this.props;

    if (this.state.loaded !== true || typeof restaurant === undefined){
      
      return null;
    }

    else{
      console.log(restaurant);
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
            restaurant={restaurant}
            reservationId={reservationId}/>
          </div>

          <br/>

          <div className = "content-div">
            <h1 className="h1-content-div"> About {restaurant.name} </h1>
            <hr/>
            <p> {restaurant.description} Contemporary Food. Styled in Georgian
              Not bad I like this place very wells
              Would definintely come again if i get a chance :).
              Not what happens next time. I'll try the lobster i guess.
            </p>

          </div>

          <br/>

          <div className = "content-div">
            <h1 className="h1-content-div"> Ratings and Reviews </h1>
            <hr/>
            <span> Gooooood stuff. I love it </span>
          </div>

        <div className = "placeholder-div">
        </div>



        </section>
      );
    }


  }



}

export default RestaurantDetail;


// <button className = "fav-button-restaurant-item"> <i className="fa fa-star" aria-hidden="true"></i> Fav </button>
