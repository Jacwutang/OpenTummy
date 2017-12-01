import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component{
  componentWillMount(){
    this.props.requestAllRestaurants();
  }

  componentWillReceiveProps(nextProps){
    if(this.props.location.pathname !== nextProps.location.pathname){
      this.props.requestAllRestaurants();
    }
  }


  render(){

    const {restaurants} = this.props;
    // debugger;
    if(Object.keys(restaurants).length === 0){
      return null;
    } else{



        return(
        <div>

          <h1> Restaurant Index </h1>
          <ul className = "restaurant-index-ul">
            {restaurants.map( (rest,idx) => (
              <RestaurantIndexItem
              key={`rest-${idx}`}
              rest={rest}

              />
            ))
            }

          </ul>
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
