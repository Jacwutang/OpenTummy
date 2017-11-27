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
            {restaurant.name}
          </div>

        </section>
      );
    }


  }



}

export default RestaurantDetail;
