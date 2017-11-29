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

  componentDidUpdate() {
    let hash = this.props.location.hash.replace('#', '');
    if (hash) {
        let node = ReactDOM.findDOMNode(this.refs[hash]);
        if (node) {
            node.scrollIntoView();
        }
    }
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
          <h1 className = "h1-profile-main"> Splash Page </h1>

          <div className = "profile-tabs">

            <div className = "profile-tabs-left">
              <a href="#profile-reservations" className="header-links">
                My Reservations
                </a>

              <a href="#profile-restaurants" className="header-links">
              My Restaurants
              </a>

            </div>

            <div className = "profile-tabs-right">

            <Link className="header-links" to="/restaurants">
              Browse all Restaurants
              </Link>
              <Link className="header-links" to= "/restaurants/new">
                Add a Restaurant
              </Link>
            </div>

          </div>


          <div ref="profile-reservations">
            <ProfileReservations
            reservations={reservations}
            restaurantsIndex={restaurantsIndex}
            deleteReservation={deleteReservation} />
          </div>

          <div className ="placeholder-div">

          </div>

          <div ref="profile-restaurants">
            <ProfileRestaurants
            my_restaurants={my_restaurants}
            deleteRestaurant={deleteRestaurant}/>
          </div>

        </div>
      );

    }

  }

};

export default Profile;


// <div>
  // <ProfileRestaurants
  // my_restaurants={my_restaurants}
  // deleteRestaurant={deleteRestaurant}/>
// </div>
