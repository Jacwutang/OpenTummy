import React from 'react';

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

        </section>
      );
    }


  }



}

export default RestaurantDetail;
