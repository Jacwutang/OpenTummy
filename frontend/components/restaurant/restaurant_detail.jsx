import React from 'react';

class RestaurantDetail extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestRestaurant(this.props.match.params.restId);
  }

  render(){
    return(
      <section className = "restaurant-detail-main">
        <h1> Restaurant Detail </h1>
        <div className = "restaurant-detail-header">

        </div>

      </section>
    );

  }



}

export default RestaurantDetail;
