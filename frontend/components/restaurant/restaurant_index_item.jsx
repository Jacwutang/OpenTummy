import React from 'react';


const RestaurantIndexItem = ({rest,idx}) => {

  return(
    <li>
    {rest.name}
    Restaurant here
    </li>

  );
};

export default RestaurantIndexItem;
// {rest[idx].name}
