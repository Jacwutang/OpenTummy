import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component{
  componentWillMount(){
    this.props.requestAllRestaurants();
  }


  render(){

    const {restaurants} = this.props;

    if(Object.keys(restaurants).length === 0){
      return null;
    } else{
        debugger;
        return(
        <div className = "profile-main">
          <h1> Restaurant Index </h1>

        </div>
      );

    }

  }

}

export default RestaurantIndex;


// <ul>
//   {this.props.restaurants.map( (rest,idx) => (
//     <RestaurantIndexItem
//     key={`rest-${idx}`}
//     rest={rest} />
//   ))
//   }
//
// </ul>

// <div className = "profile-main">
//   <h1> DID NOT LOAD </h1>
// </div>
