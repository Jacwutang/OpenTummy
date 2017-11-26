import React from 'react';
import {Link} from 'react-router-dom';



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

        <span> My Restaurants


        </span>

      </div>
    );
  }






};

export default Profile;
