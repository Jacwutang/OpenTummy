import React from 'react';
import {Link, Route} from 'react-router-dom';



const RestaurantIndexItem = ({rest,idx}) => {
  const category = (rest.category === null) ? "No Category" : rest.category;

  return(
    <li className = "restaurant-index-li">
        <div>
        <Link to={`/restaurants/${rest.id}`}>
          <img className = "thumbnail" src={rest.thumbnail}/>
        </Link>
          <span>
            <h2> {rest.name}
            <h2> $$$$$ </h2>
          </h2>
          </span>
          <br/>
          Put stars here ******
          <br/>
            {category} | {rest.city}
          <br/>

        </div>




    </li>

  );
};

export default RestaurantIndexItem;
