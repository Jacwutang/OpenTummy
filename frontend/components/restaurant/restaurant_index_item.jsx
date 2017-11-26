import React from 'react';


const RestaurantIndexItem = ({rest,idx}) => {
  const category = (rest.category === null) ? "No Category" : rest.category;

  return(
    <li className = "restaurant-index-li">
    <img className = "thumbnail" src={rest.thumbnail}/>
    {rest.name}
    <br/>
      {category} | {rest.city}

    <br/>
    <br/>
    </li>

  );
};

export default RestaurantIndexItem;
