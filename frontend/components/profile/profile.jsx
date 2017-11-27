import React from 'react';
import {Link} from 'react-router-dom';
import ProfileRestaurants from './profile_restaurants';


class Profile extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div className = "profile-main">
        <h1> Splash Page </h1>

        <Link to= "/restaurants/new">
          <button className = "restaurant-form-button" type="button">Add a Restaurant</button>
        </Link>

        <span>
          <ProfileRestaurants />

        </span>

      </div>
    );
  }






};

export default Profile;
