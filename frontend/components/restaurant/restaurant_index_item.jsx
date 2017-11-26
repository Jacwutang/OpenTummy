import React from 'react';


const RestaurantIndexItem = ({rest,idx}) => {

  return(
    <li>
    {rest.name}
    {rest.address}
    {rest.city}
    Restaurant here
    </li>

  );
};

export default RestaurantIndexItem;
