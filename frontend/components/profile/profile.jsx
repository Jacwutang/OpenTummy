import React from 'react';
import {Link} from 'react-router-dom';
import ProfileRestaurants from './profile_restaurants';
import ProfileReservations from './profile_reservations';

class Profile extends React.Component{
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.props.requestAllRestaurants();
  }
  render(){

    let my_restaurants = Object.keys(this.props.currentUser.restaurants).map(el => (
      this.props.currentUser.restaurants[el]));

    let reservations = Object.keys(this.props.currentUser.reservations).map(res => (
        this.props.currentUser.reservations[res]));


    const{deleteRestaurant,deleteReservation,restaurantsIndex} = this.props;


    if(Object.keys(restaurantsIndex).length === 0){
      return null;
    } else{
      return(

        <div className = "profile-main">
          <h1> Splash Page </h1>

          <Link to= "/restaurants/new">
            <button className = "restaurant-form-button" type="button">Add a Restaurant</button>
          </Link>


          <div>
            <ProfileReservations
            reservations={reservations}
            restaurantsIndex={restaurantsIndex}
            deleteReservation={deleteReservation} />
          </div>


        </div>
      );

    }

  }

};

export default Profile;


// <div>
//   <ProfileRestaurants
//   my_restaurants={my_restaurants}
//   deleteRestaurant={deleteRestaurant}/>
// </div>
