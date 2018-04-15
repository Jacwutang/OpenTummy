import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component{
  componentWillMount(){
    this.props.requestAllRestaurants(this.props.region);
  }

  // componentWillReceiveProps(nextProps){
  //   if(this.props.location.pathname !== nextProps.location.pathname){
  //     this.props.requestAllRestaurants();
  //   }
  // }


  render(){
    
    const {restaurants} = this.props;

    if(Object.keys(restaurants).length === 0){
      return null;
    } else{



        return(
        <div>

          <h1 className = "restaurant-index-h1"> Browse all Restaurants </h1>
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
