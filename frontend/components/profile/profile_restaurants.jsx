import React from 'react';

class ProfileRestaurants extends React.Component{

  render(){
    const {restaurants} = this.props;

    return(
      <div>
        <h1> My Restaurantssss </h1>
        <ul>
          {restaurants.map( (rest) => (
            <li
            key = {rest.id}>
            {rest.name}
            {rest.address}
            {rest.city}
            {rest.price}
            


            </li>
          ))}

        </ul>
      </div>
    );
  }

};


export default ProfileRestaurants;
