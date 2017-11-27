import React from 'react';
import {Link} from 'react-router-dom';
import ProfileRestaurants from './profile_restaurants';


class Profile extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    
    let restaurants = Object.keys(this.props.currentUser.restaurants).map(el => (
      this.props.currentUser.restaurants[el]));

    const{deleteRestaurant} = this.props;

    return(
      <div className = "profile-main">
        <h1> Splash Page </h1>

        <Link to= "/restaurants/new">
          <button className = "restaurant-form-button" type="button">Add a Restaurant</button>
        </Link>

        <div>
          <ProfileRestaurants
          restaurants={restaurants}
          deleteRestaurant={deleteRestaurant}/>

        </div>

      </div>
    );
  }






};

export default Profile;
